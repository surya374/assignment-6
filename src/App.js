import React from "react";
import { NotesProvider } from "./Context/NotesContex";
import NotesList from "./components/NotesList";
import NewNoteForm from "./components/NewNoteForm";

const App = () => {
  return (
    <NotesProvider>
      <h1>Sticky Notes</h1>
      <NewNoteForm />
      <NotesList />
    </NotesProvider>
  );
};

export default App;
