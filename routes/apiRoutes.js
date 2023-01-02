const router = require('express').Router();
const {db} = require('../db/db.json');
const { addNewNote, removeNote} = require('../lib/note.js');

router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
})

router.post('/notes', (req, res) => {
    const newNote = addNewNote(req.body, db);
    res.json(newNote);
})

router.delete('/notes/:id', (req, res) => {
    removeNote(req.params.id, db);
    res.json(req.body);
})

module.exports = router;