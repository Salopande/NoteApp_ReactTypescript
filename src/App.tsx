import { Box } from "@mui/material";

import "./App.css";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import { NoteObj } from "./models/notes";

function App() {

  const [notes, setNotes] = useState<NoteObj[]>([]);

  useEffect(()=>{
   if(sessionStorage.getItem('notes')){
     setNotes(JSON.parse(sessionStorage.getItem('notes') as string))
   }
  },[]);

  const addNotes = (note: NoteObj)=>{
    setNotes([note, ...notes])
    sessionStorage.setItem('notes',JSON.stringify([note, ...notes]))
  }

  const deleteNote = (id:number)=>{
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote addNote={addNotes}/>
        <Notes notes={notes} deleteNote={deleteNote}/>
      </Box>
    </>
  );
}

export default App;
