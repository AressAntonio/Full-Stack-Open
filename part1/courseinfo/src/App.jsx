import { useState } from "react";

//AppCounter
/*const Display = ({counter})=>
<div>{counter}</div>;

const Button = ({onClick, text})=> <button onClick={onClick}>{text}</button>

const App = (props)=>{

  const [counter, setCounter] = useState(0);
  console.log('Rendering with counter value', counter);
  
  const increaseByOne = ()=>{
    setCounter(counter + 1);
    console.log('Increasing, value before', counter);
  }; 

  const setToZero = ()=> {
    setCounter(0);
    console.log('Resetting, value to zero', counter);

  };

  const decreaseByOne = ()=>{
    setCounter(counter - 1);
    console.log('Decreasing, value before', counter);
  }; 

  console.log('rendering...', counter);

  return(
    <div>

      <Display counter={counter} />

      <Button onClick={increaseByOne} text='plus' />

      <Button onClick={setToZero} text='clear' />

      <Button onClick={decreaseByOne} text='minus' />

    </div>
    
  )
  
}*/

//App Left and Right

/*const History = (props)=>{
  if(props.allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text})=>(
  <button onClick={handleClick}>
    {text}
  </button>
);*/

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App
