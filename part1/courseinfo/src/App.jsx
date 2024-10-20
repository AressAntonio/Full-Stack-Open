
const App = ()=>{
  
  //variables
  const course = {
    name: 'HAlf Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  };



  //HEADER COMPONENT
  const Header = ()=>{
    return(

      <h1>
      <strong>{course.name}</strong>
      </h1>
    )
  };

  //CONTENT COMPONENT
  const Part1 = ()=>{
    return(

      <p>
        {course.parts[0].name} whit {course.parts[0].exercises} exercises.
      </p>

    )
  };

  const Part2 = ()=>{
    return(
      <p>
        {course.parts[1].name} whit {course.parts[1].exercises} exercises.
      </p>
    )
  };

  const Part3 = ()=>{
    return(
      <p>
        {course.parts[2].name} whit {course.parts[2].exercises} exercises.
    </p>
    )
  };

  const Content = ()=>{
    return(

      <>
        <Part1 />
        <Part2 />
        <Part3 />
      </>
      
    )
  }

  //TOTAL COMPONENT
  const Total = ()=>{
    return(
      <>
        <p>
          Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
        </p>
      </>
    )
  }

  return(

    <>
      <Header />
      <Content />
      <Total />
    </>
  )
}

export default App
