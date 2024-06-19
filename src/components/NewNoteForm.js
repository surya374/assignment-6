import React, { useContext, useRef } from "react";
import { NotesContext } from "../Context/NotesContex";
import "./App.css";

const NewNoteForm = () => {
  const textRef = useRef(null);
  const colorRef = useRef("#fff");

  const { addNote } = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = textRef.current.value.trim();
    const color = colorRef.current.value;
    if (text) {
      addNote(text, color);
      textRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} id="newNote">
      <label htmlFor="newNote" className="heading">
        New Note:
      </label>
      <input type="text" ref={textRef} id="newNote" />
      <label htmlFor="noteColor">Pick a color:</label>
      <input type="color" id="noteColor" ref={colorRef} defaultValue="#fff" />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NewNoteForm;
