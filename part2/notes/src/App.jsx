import { useState } from "react";

import Note from "./components/Note";


const App = (props)=>{

  const [notes, setNotes] = useState(props.notes);

  const [newNote, setNewNotes] = useState('a new note...');

  const [showAll, setShowAll] = useState(true);

  console.log('this is a objecs of main.jsx: ',notes);

  const noteToShow = showAll ? notes : notes.filter(note=>note.important === true);

  const result = notes.map(note=>note.id);
  console.log(result);

  const addNote = (event)=>{
    event.preventDefault();
    const noteObject ={
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNotes('')
    
    console.log('Button clicked', event.target);
  };

  const handleNoteChange = (event)=>{
    console.log(event.target.value);
    setNewNotes(event.target.value);
  };


  return(

    <div>
      <h1><strong>Notes</strong></h1>

      <div>
        <button onClick={()=>setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
       {
        noteToShow.map(note=>
         <Note key={note.id} note={note} />
        )
       }
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>

    </div>
    
  )

  
  
}

export default App
