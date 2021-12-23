const notesController = {};

//Creation
notesController.renderNoteForm = (req, res) => {
  res.render("notes/createNote");
};

notesController.renderCreateNote = (req, res) => {
  res.send("new note add");
};

//Read
notesController.renderReadNotes = (req, res) => {
  res.send("All ur notes");
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
