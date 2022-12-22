const fs = require('fs').promises;
const path = require('path');
const uniqid = require('uniqid');

const contactsPath = path.normalize("./db/contacts.json");

async function listContacts() {
    try {
        console.log('list contacts:')
        const data = await fs.readFile(contactsPath, "utf8");
        //console.log('JSON.parse(data)', JSON.parse(data));
        return JSON.parse(data)
    } catch (error) {
        console.log('error', error);
        
    }
}

async function getContactById(contactId) {
    try {
        console.log('contact Id:');
        const contacts = await listContacts();
        console.log(contacts.find((obj) => obj.id === contactId.toString())) 
        return contacts.find((obj) => obj.id === contactId.toString())
    } catch (error) {
        console.log('error', error);
    }
}

async function removeContact(contactId) {
    console.log('remove Contact:')
    
    try {
        const contacts = await listContacts();
        const updateContacts =
            contacts.filter((obj) => obj.id !== contactId.toString());
        console.log(updateContacts)
        await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, '\t'), "utf-8")
        return 
    } catch (error) {
        console.log('error', error);
    }
}

async function addContact(name, email, phone) {
    console.log('add Contact:')
    try {
        const id = uniqid();
        const contacts = await listContacts();
        contacts.push({ id, name, email, phone })
        console.log(contacts)
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