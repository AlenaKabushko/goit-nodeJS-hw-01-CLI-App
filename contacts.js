const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.normalize("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
    console.log('list contacts:')
    fs.readFile(contactsPath).then(data => console.log(data.toString()))
  .catch(err => console.log(err.message));
        //.then((text) => console.log('data', text))
}

function getContactById(contactId) {
console.log('contact Id:')
}

function removeContact(contactId) {
console.log('remove Contact:')
}

function addContact(name, email, phone) {
console.log('add Contact:')
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}