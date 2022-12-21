const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.normalize("./db/contacts.json");

async function listContacts() {
    try {
        console.log('list contacts:')
        const data = await fs.readFile(contactsPath);
        console.log('JSON.parse(data)', JSON.parse(data));
        return JSON.parse(data)
    } catch (error) {
        console.log('error', error);
        return []
    }
}

async function getContactById(contactId) {
    try {
        console.log('contact Id:');
        const contacts = await listContacts();
        console.log(contacts.find((obj) => obj.id === contactId.toString())) 
        return contacts.find((obj) => obj.id === contactId.toString())
    // 
    } catch (error) {
        console.log('error', error);
        return []
    }
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