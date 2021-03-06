console.log('Starting app2-command-argument.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
//let command = process.argv[2];
const command = argv._[0];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

// note
// let noteString = fs.readFileSync('playground/notes.json');
// let note = JSON.parse(noteString);
// console.log(typeof note);
// console.log(note.title);

if (command === 'add') {
    console.log('Adding new note');
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }

} else if (command === 'list') {
    console.log('Listing all notes');
    notes.getAll();

} else if (command === 'read') {
    console.log('Reading note');
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }

} else if (command == 'remove') {
    console.log('Removing note');
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else {
    console.log('Command not recognized');
}