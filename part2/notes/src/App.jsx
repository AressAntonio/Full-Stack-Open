import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from './services/notes';
import Notification from "./components/Notification";
import Footer from "./components/Footer";


const App = (props)=>{

  const [notes, setNotes] = useState([]);

  const [newNote, setNewNotes] = useState('a new note...');

  const [showAll, setShowAll] = useState(true);

  const [errorMessage, setErrorMessage] = useState('¡Lo sentimos algo salio mal!');


  useEffect(()=>{
    console.log('effect');
    noteService
      .getAll()
      .then(initialNotes =>{
        setNotes(initialNotes);
      })
  }, []);
  
  /*OTRA FORMA DE REESCRIBIR EL CODIGO
  const hook = ()=>{
    console.log('effect');
    noteService
      .getAll()
      .then(initialNotes =>{
        setNotes(initialNotes);
      })
  }
  useEffect(hook, []);*/
  console.log('render', notes.length, 'notes');

  const noteToShow = showAll ? notes : notes.filter(note=>note.important === true);

  const result = notes.map(note=>note.id);
  console.log(result);

  const addNote = (event)=>{
    event.preventDefault();
    const noteObject ={
      content: newNote,
      important: Math.random() < 0.5,
      //id: notes.length + 1,
    }

    //Agregando nota a bd.json usando axios
    noteService
      .create(noteObject)
      .then(returnedNote =>{
        setNotes(notes.concat(returnedNote));
        setNewNotes('');
      });
      setErrorMessage('a create new Note..');
        setTimeout(()=>{
          setErrorMessage(null)
        },5000);
    
    /*setNotes(notes.concat(noteObject))
    setNewNotes('')*/
    
    console.log('Button clicked', event.target);
  };

  const handleNoteChange = (event)=>{
    console.log(event.target.value);
    setNewNotes(event.target.value);
  };

  const toggleImportanceOf = (id)=>{

    const note = notes.find(n => n.id === id);
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote =>{
        setNotes(notes.map(note => note.id !== id ? note : returnedNote));
      })
      /*.update(changedNote).then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })*/
      .catch(error =>{
        
        setErrorMessage(
          `Note '${note.content}' ya fue removida del servidor.`
        );

        setTimeout(()=>{
          setErrorMessage(null);
        }, 5000);

        setNotes(notes.filter(n => n.id !== id));
      })
    console.log(`importance of ${id} needs to be toggled`);
  };

  return(

    <div>
      <h1><strong>Notes</strong></h1>

      <Notification message={errorMessage} />

      <div>
        <button onClick={()=>setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
       {
        noteToShow.map(note=>
         <Note 
          key={note.id} 
          note={note}
          toggleImportance={()=>toggleImportanceOf(note.id)} />
        )
       }
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>

      <Footer />

    </div>
    
  )

  
  
}

export default App
