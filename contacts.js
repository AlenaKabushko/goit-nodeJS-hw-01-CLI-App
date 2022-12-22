const fs = require('fs').promises;
const path = require('path');
const uniqid = require('uniqid');

const contactsPath = path.normalize("./db/contacts.json");

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, "utf8");
        return JSON.parse(data)
    } catch (error) {
        console.log('error', error);
        
    }
}

async function getContactById(contactId) {
    try {
        const contacts = await listContacts();
        return contacts.find((obj) => obj.id === contactId)
    } catch (error) {
        console.log('error', error);
    }
}

async function removeContact(contactId) {
    try {
        const contacts = await listContacts();
        const updateContacts =
            contacts.filter((obj) => obj.id !== contactId.toString());
        await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, '\t'), "utf-8")
        return 
    } catch (error) {
        console.log('error', error);
    }
}

async function addContact(name, email, phone) {
    try {
        const id = uniqid();
        const contacts = await listContacts();
        contacts.push({ id, name, email, phone })
        return contacts
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}