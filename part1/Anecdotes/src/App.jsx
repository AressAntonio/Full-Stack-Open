import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const AnecdoteMostVotes =({anecdotes, votes, selected})=>{
  const indiMost = Object.keys(votes).reduce((a, b)=> votes[a] > votes[b] ? a : b, 0);
  

  return(
    <div>
      <h2><strong>Anectote with most votes.</strong></h2>
        <>
         {votes[indiMost] > 0 ? (
          <>
            <p>{anecdotes[indiMost]}</p>
            <p>has: {votes[indiMost]} votes.</p>
          </>
      ) : (
          <p>Any votes for now.</p>
      )}
        </>
      
    </div>
  )
}



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

  const [selected, setSelected] = useState(null);
  console.log(selected);
  const setToSelected = (newValue)=>{
    console.log('value of button', newValue)
    setSelected(newValue)
  }
  const anecAle = Math.floor(Math.random()*anecdotes.length);

  const [votes, setVote] = useState({});

  const addVote = ()=>{
    if(selected){
      setVote((prevVotes)=>({
        ...prevVotes,
        [selected]: (prevVotes[selected]||0)+1
      }));
    }
    console.log(votes)
  }
  

  return(
    <>
      <h1><strong>{title}</strong></h1>

      <>
        {selected !== null ? (
            <>
              <p>{anecdotes[selected]}</p>
              <p>has: <strong>{votes[selected]}</strong> votes.</p>
            </>
        ) : (
            <>
            <p>Any anecdote for now, you need on click next anecdote button.</p>
            </>
        )}
      </>

      <p>

      <button onClick={addVote}>vote</button>

      <Button handleClick={()=>setToSelected(anecAle)} text='next anecdote'/>
      </p>

      <AnecdoteMostVotes anecdotes={anecdotes} votes={votes} selected={selected} />
      
    </>
  )



}



export default App

