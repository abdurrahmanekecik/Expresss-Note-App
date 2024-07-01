const express = require("express");
const router = express.Router();
const { createNote, getAllNotes, getNote, editNote, deleteNote } = require("../controllers");

router.post("/notes", createNote);
router.get("/get-note/:id", getNote);
router.get("/notes", getAllNotes);
router.put("/notes", editNote);
router.delete("/notes", deleteNote);

module.exports = router; // Corrected export statement
