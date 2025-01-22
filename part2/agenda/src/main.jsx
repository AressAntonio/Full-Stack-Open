import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';

const persons = [
    {id: 1, nombre: 'Jose Vazquez', number: '55-44-68-77-00'},
    {id: 2, nombre: 'Roberto Gomez', number: '55-62-08-55-03'},
    {id: 3, nombre: 'Luis Mejia', number: '55-44-02-31-03'},
];

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons}/>);