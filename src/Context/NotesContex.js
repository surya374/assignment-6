import React, { createContext, useState } from "react";

const NotesContext = createContext({
  notes: [],
  addNote: (text, color) => {},
  updateNote: (id, text, color) => {},
  deleteNote: (id) => {},
});

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (text, color) => {
    setNotes([...notes, { id: Math.random(), text, color }]);
  };

  const updateNote = (id, text, color) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text, color } : note))
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
