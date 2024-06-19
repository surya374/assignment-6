import React, { useContext } from "react";
import Note from "./Note";
import NoteColorPicker from "./NoteColorPicker";
import { NotesContext } from "../Context/NotesContex";
import "./App.css";

const NotesList = () => {
  const { notes, updateNote, deleteNote } = useContext(NotesContext);

  return (
    <div className="list-container">
      {notes.map((note) => (
        <div key={note.id} style={{ margin: "10px 0" }}>
          <Note note={note} updateNote={updateNote} deleteNote={deleteNote} />
          <NoteColorPicker color={note} updateNote={updateNote} />
        </div>
      ))}
    </div>
  );
};

export default NotesList;
