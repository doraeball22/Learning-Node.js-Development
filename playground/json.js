// JSON to StringObject
let obj = {
 name: 'Andrew'
};
let stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

// StringObject to JSON
let personString = '{"name": "Andrew","age": 25}';
let person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('playground/notes.json', originalNoteString);

