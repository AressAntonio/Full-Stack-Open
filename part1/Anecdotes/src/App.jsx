import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);



function App() {
  const title = "Anecdotes";
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(anecdotes[0]);
  console.log(selected);
  const setToSelected = (newValue)=>{
    console.log('value of button', newValue)
    setSelected(newValue)
  }

  const [votes, setVote] = useState({});

  const addVote = ()=>{
    if(selected){
      setVote((prevVotes)=>({
        ...prevVotes,
        [selected]: (prevVotes[selected]||0)+1
      }));
    }
  }
  

  return(
    <>
      <h1><strong>{title}</strong></h1>
      <p>
      {selected}
      </p>
      <p>
        has <strong>{votes[selected]}</strong> votes.
      </p>

      <p>

      <button onClick={addVote}>vote</button>

      <Button handleClick={()=>setToSelected(anecdotes[Math.floor(Math.random()*anecdotes.length)])} text='next anecdote'/>
      </p>
      
    </>
  )



}

export default App