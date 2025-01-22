import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';

const persons = [
    {id: 1, nombre: 'Jose Vazquez', number: 55446877},
    {id: 2, nombre: 'Roberto Gomez', number: 5562085503},
    {id: 3, nombre: 'Luis Mejia', number: 5544023103},
];

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons}/>);