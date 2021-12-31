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
  res.redirect("/notes");
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
notesController.renderDeleteNote = async (req, res) => {
  console.log(req.params.id); //id of the note we want to delete
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes"); //refresh
};
module.exports = notesController;
