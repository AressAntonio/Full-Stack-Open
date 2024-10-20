
const App = ()=>{
  
  //variables
  const course = 'HAlf Stack application development';

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };

  const part3 = {
    name: 'State of a component',
    exercises: 14.
  };

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
        {part1.name} whit {part1.exercises} exercises.
      </p>

    )
  };

  const Part2 = ()=>{
    return(
      <p>
        {part2.name} whit {part2.exercises} exercises.
      </p>
    )
  };

  const Part3 = ()=>{
    return(
      <p>
        {part3.name} whit {part3.exercises} exercises.
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
          Number of exercises: {part1.exercises + part2.exercises + part3.exercises}
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
