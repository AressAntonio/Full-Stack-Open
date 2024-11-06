
const Course = ({course})=>{

    const partDetails = course.parts.map(part => {
      return (

          <p key={part.id}>
            {part.name} : <span>{part.exercises}</span>.
          </p>
      );
    });
    console.log('objects render: ',partDetails);

    const Sum = ()=>{
      const allExercises = course.parts.reduce((acount, part)=>{
        return acount += part.exercises;
      }, 0)
      console.log('total of exercises: ',allExercises);

      return(
        <p>
           <strong>
            All exercises:  {allExercises}.
            </strong>
        </p>
      )
    }

    return(
      <>
        <h1>
        <strong>
          {course.name}
        </strong>
        </h1>

        <article>
          {partDetails}
          <Sum />
        </article>
      </>
    )
      
}



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
    ]
  }

  return(
    <>
      {<Course course={course}/>}
    </>
  )
}

export default App
