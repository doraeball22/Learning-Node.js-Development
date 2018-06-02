console.log('Starting notes.js');
const fs = require('fs');

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('./playground/notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('./playground/notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    console.log('Adding note', title);
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Getting note', title);
};
const removeNote = (title) => {
    console.log('Removing note', title);
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    // save new notes array
    saveNotes(filteredNotes);
    // returns true, that means a note was removed; if it returns false, that means a note was not removed.
    return notes.length !== filteredNotes.length;
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};