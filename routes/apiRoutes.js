const express = require('express');

const { readFromFile, readAndAppend } = require(`../helpers/fsUtils`);
const fs = require(`fs`);
const uuid = require(`../helpers/uuid`);

const app = express();

app.get(`/api/notes`, (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile(`../db/db.json`).then((data) => res.json(JSON.parse(data)));
  });
  
  app.post(`/api/notes`, (req, res) => {
    console.info(`${req.method} request received to add new note`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (title && text) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
      console.log(newNote);
      
      readAndAppend(newNote, `../db/db.json`);
  
      const response = {
        status: `success`,
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json(`Error in saving new note`);
    }
  });
  
  app.delete("/api/notes/:id", (req, res) => {
    let notes = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    let noteId = req.params.id.toString();
  
    notes = notes.filter((dltNote) => {
      return dltNote.id != noteId;
    });
  
    fs.writeFileSync("../db/db.json", JSON.stringify(notes));
    res.json(notes);
  });

  
  module.exports = app;