
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


//ejemplo de uso axios
/*import axios from 'axios';
const promise = axios.get('http://localhost:3001/notes');
console.log(promise);
const promise2 = axios.get('http://localhost:3001/foobar');
console.log(promise2);
promise.then(response=>{
  console.log(response);
})
axios.get('http://localhost:3001/notes').then(response=>{
  const note = response.data;
  console.log(notes);
});

const notes = [

  {id: 1, content: 'HTML is Easy', important: true},

  {id: 2, content: 'Browser can execute only JavaScript', important: false},

  {id: 3, content: 'GET and POST are the most important methods of HTTP protocol', important: true},

];

axios
  .get('http://localhost:3001/notes')
  .then(response=>{
    const notes = response.data;
   
  });*/
