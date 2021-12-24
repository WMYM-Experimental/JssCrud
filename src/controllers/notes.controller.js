const Note = require("../models/Note");
const notesController = {};

//Creation
notesController.renderNoteForm = (req, res) => {
  res.render("notes/createNote");
};

notesController.renderCreateNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title: title, description: description });
  console.log(newNote);
  await newNote.save();
  res.send(newNote);
};

//Read
notesController.renderReadNotes = async (req, res) => {
  const allNotes = await Note.find();
  res.render("notes/allNotes", { allNotes });
};

//Update
notesController.renderUpdateForm = (req, res) => {
  res.send("Update form");
};

notesController.renderUpdateNote = (req, res) => {
  res.send("Update note");
};
notesController.renderDeleteNote = (req, res) => {
  res.send("Delete note");
};
module.exports = notesController;
