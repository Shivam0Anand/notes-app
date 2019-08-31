const chalk = require("chalk");
const yargs = require("yargs");
var notes = require("./notes");

// customizing yargs version
yargs.version("1.1.0");

// custom add command
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Title Body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

// Listing
yargs.command({
  command: "list",
  describe: "List Your Notes",
  handler: function() {
    console.log("Listing out all Notes");
  }
});

// Read Notes
yargs.command({
  command: "read",
  describe: "Read Your Notes",
  handler: function() {
    console.log("Reading notes");
  }
});

yargs.parse();
