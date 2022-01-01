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
notesController.renderUpdateForm = async (req, res) => {
  const noteUp = await Note.findById(req.params.id).lean();
  console.log(noteUp);
  res.render("notes/editNote", { noteUp });
};

notesController.renderUpdateNote = async (req, res) => {
  const { title, description } = req.body; //request updated variables
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  res.redirect("/notes");
};

//Delete
notesController.renderDeleteNote = async (req, res) => {
  console.log(req.params.id); //id of the note we want to delete
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes"); //refresh
};

module.exports = notesController;
