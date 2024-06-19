import React, { useContext, useRef } from "react";
import { NotesContext } from "../Context/NotesContex";
import "./App.css";

const Note = ({ note, updateNote, deleteNote }) => {
  const textRef = useRef(note.text);
  const { addNote } = useContext(NotesContext);

  const handleUpdate = () => {
    const updatedText = textRef.current.value.trim();
    if (updatedText) {
      updateNote(note.id, updatedText, note.color);
    } else {
      deleteNote(note.id);
      addNote("", note.color);
    }
  };

  return (
    <div style={{ backgroundColor: note.color }} className="note-container">
      <textarea
        ref={textRef}
        defaultValue={note.text}
        onBlur={handleUpdate}
        className="note-textarea"
      />
      <button onClick={() => deleteNote(note.id)} className="note-button">
        X
      </button>
    </div>
  );
};

export default Note;
