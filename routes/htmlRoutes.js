const express = require('express');
const path = require('path');

const app = express();

//Routes
app.get(`/notes`, (req, res) => {
    console.log(`Note page requested`);
    res.sendFile(path.join(__dirname, `../public/notes.html`));
  });
  
app.get(`/`, (req, res) => {
    console.log(`Home page requested`);
    res.sendFile(path.join(__dirname, `../public/index.html`));
  });

module.exports = app;