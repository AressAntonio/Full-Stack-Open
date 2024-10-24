import { useState } from 'react'
const Header = (props)=>{
  return(
    <h1><strong>{props.text}</strong></h1>
  )
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props)=>{
  return(
    <>
    <h2><strong>{props.text}</strong></h2>    
    </>
  )
  
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const setToGood = (newValue)=>{
    console.log('value now of goob', newValue)
    setGood(newValue)
  };

  const [neutral, setNeutral] = useState(0);
  const setToNeutral = (newValue)=>{
    console.log('value now of Neutral', newValue)
    setNeutral(newValue)
  }

  const [bad, setBad] = useState(0);
  const setToBad = (newValue)=>{
    console.log('value of Bad', newValue)
    setBad(newValue)
  }

  return (
    <>

      <Header text='Give feedback' />

      <Button handleClick={()=>setToGood(good + 1)} text='Good'/>
      
      <Button handleClick={()=>setToNeutral(neutral + 1)} text='Neutral' />
      
      <Button handleClick={()=>setToBad(bad + 1)} text='Bad' />
      
      <Statistics text='statistics' />

      <p>
      <strong>
      <span>Good: {good}</span>
      </strong>
      </p>
      <p>
      <span><strong>
      Neutral: {neutral}</strong></span>
      </p>
      <p>
      <span><strong>
      Bad: {bad}</strong></span>
      </p>
      
    </>
  )
}

export default App
