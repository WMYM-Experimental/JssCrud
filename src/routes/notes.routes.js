const { Router } = require("express");
const router = Router();
const {
  renderNoteForm,
  renderCreateNote,
  renderReadNotes,
  renderUpdateForm,
  renderUpdateNote,
  renderDeleteNote,
} = require("../controllers/notes.controller");

//Notes Creation
router.get("/notes/create", renderNoteForm);
router.post("/notes/create", renderCreateNote);

//Read all Notes
router.get("/notes", renderReadNotes);

//Update Notes
router.get("/notes/edit/:id", renderUpdateForm);
router.put("/notes/edit/:id", renderUpdateNote);

//Delete Notes
router.delete("/notes/delete/:id", renderDeleteNote);

module.exports = router;
