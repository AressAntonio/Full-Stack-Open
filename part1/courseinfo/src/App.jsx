//Header component
const Header = ()=>{
  const course = 'Half Stack application development';

  return(
    <>
      <h1>
      <strong>{course}</strong>
      </h1>
    </>
    
  )
};

const content = [
  {part: 'Fundamentals of React', exercises: 10},
  {part: 'Using props to pass data', exercises: 7},
  {part: 'State of a component', exercises: 14}

];

//Part component
const Part = ()=>{
  return(
    <p>
        {content[0].part} whit {content[0].exercises} exercises.
    </p>
  )
}

const Part2 = ()=>{
  return(
    <p>
        {content[1].part} whit {content[1].exercises} exercises.
    </p>
  )
}
const Part3 = ()=>{
  return(
    <p>
        {content[2].part} whit {content[2].exercises} exercises.
    </p>
  )
}

//Content component
const Content = ()=>{
  return(
    <>
      <Part />
      <Part2 />
      <Part3 />
    </>
    
  )
}

//Total component
const Total = ()=>{
  return(
    <>
      <p>
        Number of exercises {content[0].exercises + content[1].exercises + content[2].exercises}
      </p>
    </>
  )
}

const App = ()=>{
  

  return(

    <>
      <Header />
      <Content />
      <Total />
    </>
  )
}

export default App
