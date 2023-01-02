const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

function findById(id, noteList) {
    return noteList.filter(note => note.id === id)[0];
}

function addNewNote(body, noteList) {
    let newNote = body;
    newNote.id = uniqid();
    noteList.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({db: noteList}, null, 2)
    );
    return newNote;
}

function removeNote (id, noteList) {
    const removeThisNote = findById(id, noteList);
    for (let i = 0; i<noteList.length; i++){
        if (noteList[i].id === removeThisNote.id) {
            noteList.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({db: noteList}, null, 2)
            );
        }
    };
}

module.exports = {
    findById,
    addNewNote,
    removeNote
};