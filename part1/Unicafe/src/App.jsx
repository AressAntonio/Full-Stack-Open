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





const Promedio = ({bad,good,neutral})=>{
  
  let TotalPromGood = 0;
  let TotalPromBab = 0;
  let TotalPromNeutro = 0;
  let TotalProm;

  if(bad){
    TotalPromBab = good - bad;

  }else if(good){
    TotalPromGood = good; 
  
  }else if(neutral){
    TotalPromNeutro = 0;
    
  }
  let Prom = TotalPromGood + TotalPromBab + TotalPromNeutro;
  TotalProm = (TotalPromGood + TotalPromBab + TotalPromNeutro) / 3;
  console.log('Promedio: ',Prom,'\r PorcenProm: ', TotalProm);

  return(
    <p>
      <strong>
      Average: {TotalProm} %
      </strong>
    </p>
  )
}

const StatisticLine =({text,props})=>{
  return(
    <p><strong>{text}: {props}</strong></p>
  )
}

const Statistics = ({start,bad,neutral,good})=>{
  if (!neutral&!bad&!good){
    return(
      <>
        <h2>Statistics</h2>
        <p>{start}</p>
      </>
    )
  }else {
    const Total = bad + neutral + good;
    const prom = Total / 3;

    const porc = good ? good / Total * 100 : '0';
 
   return(
    <>
        
      <h2><strong>Statistics</strong></h2>

      <StatisticLine text='Good' props= {good} />
      <StatisticLine text='Neutral' props={neutral} />
      <StatisticLine text='Bad' props={bad} />

      <p><strong>All: {Total}</strong></p>

      <Promedio bad={bad} good={good} neutral={neutral}/>

      <p>
        <strong>
          Positive: {porc} %
        </strong>
      </p>
        
    </>
   )

  }
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const statics = 'statistics';
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

  const [start, setDatos] = useState('No feedback given');
  
  return (
    <>

      <Header text='Give feedback' />

      <Button handleClick={()=>setToGood(good + 1)} text='Good'/>
      
      <Button handleClick={()=>setToNeutral(neutral + 1)} text='Neutral' />
          
      <Button handleClick={()=>setToBad(bad + 1)} text='Bad' />

      <Statistics start={start} bad={bad} good={good} neutral={neutral}/>
      
    </>
  )
}

export default App
