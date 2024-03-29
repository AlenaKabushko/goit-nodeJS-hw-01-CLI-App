const { listContacts,
    getContactById,
    removeContact,
    addContact } = require('./contacts');

const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        console.table(await listContacts())
        break;

    case "get":
        console.table(await getContactById(id))
        break;

    case "add":
        console.table(await addContact(name, email, phone))
        break;

    case "remove":
        await removeContact(id)
        break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv)