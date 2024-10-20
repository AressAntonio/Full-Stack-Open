
const App = ()=>{
  
  //variables
  const course = 'HAlf Stack application development';

  const parts = [
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

  //HEADER COMPONENT
  const Header = ()=>{
    return(

      <h1>
      <strong>{course}</strong>
      </h1>
    )
  };

  //CONTENT COMPONENT
  const Part1 = ()=>{
    return(

      <p>
        {parts[0].name} whit {parts[0].exercises} exercises.
      </p>

    )
  };

  const Part2 = ()=>{
    return(
      <p>
        {parts[1].name} whit {parts[1].exercises} exercises.
      </p>
    )
  };

  const Part3 = ()=>{
    return(
      <p>
        {parts[2].name} whit {parts[2].exercises} exercises.
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
          Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </p>
      </>
    )
  }

  return(

    <>
      <Header course={course}/>
      <Content />
      <Total />
    </>
  )
}

export default App
