
import Note from "./components/Note";


const App = ({notes})=>{

  console.log('this is a objecs of main.jsx: ',notes);

  const result = notes.map(note=>note.id);
  console.log(result);


  return(

    <div>
      <h1><strong>Notes</strong></h1>

      <ul>
       {
        notes.map(note=>
         <Note key={note.id} note={note} />
        )
       }
      </ul>

    </div>
    
  )

  
  
}

/*const Course = (props)=>{
 
  console.log(props);

  cosnt {course} = props

  return(
    <div>
    <Header course={course} />
    </div>
  )
}

const App = ()=>{
  const course = {

  }

  console.log('App works...')

  return(
    <div>
      < Course course={course} />
    </div>
  )
}*/

export default App
