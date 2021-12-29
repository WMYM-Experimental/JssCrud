const Note = require("../models/Note");
const notesController = {};

//Create
notesController.renderNoteForm = (req, res) => {
  res.render("notes/createNote");
};

notesController.renderCreateNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();
  console.log(newNote);
  res.send(newNote);
};

//Read
notesController.renderReadNotes = async (req, res) => {
  const NOTES = await Note.find().lean();
  res.render("notes/allNotes", { NOTES });
};

//Update
notesController.renderUpdateForm = (req, res) => {
  res.send("Update form");
};

notesController.renderUpdateNote = (req, res) => {
  res.send("Update note");
};

//Delete
notesController.renderDeleteNote = (req, res) => {
  res.send("Delete note");
};
module.exports = notesController;
