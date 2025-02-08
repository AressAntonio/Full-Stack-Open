import {useState, useEffect} from 'react';
import axios from 'axios';
import Contac from './components/Contacs';
import Filtro from './components/Filtro';
import personService from './services/persons';

const App = (props)=>{

  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('a new person');
  const [newNumber, setNewNumber] = useState('00-00-00-00-00');

  //trayendo datos de bd.json usando json-server, Effect-hook & libreria axios
  const hook = ()=>{
    console.log('effect');
    personService
      .getAll()
      .then(initialPerson =>{
        console.log('promise fulfilled');
        setPersons(initialPerson);
      });

  }
  useEffect(hook, []);
  console.log('render', persons.length, 'persons');

  //metodo para agregar persona
  const addPerson = (event)=>{
    event.preventDefault();

    const personObject = {
      nombre: newName,
      number: newNumber,
      //id: persons.length + 1,
    };

    personService
      .create(personObject)
      .then(returnedPerson =>{
        console.log(returnedPerson);

        const exists = persons.some(person => person.nombre === newName || person.number === newNumber);

        if(exists){
          alert(`${newName} ya está agregado a la agenda.`)
        }else{
          setPersons(persons.concat(returnedPerson));
          alert(`${newName} fue agregado a tus contactos exitosamente.`);
        }
        
        setNewName('')
        setNewNumber('')
      });

      console.log('button clicked', event.target);
  };

//controldor de eventos en inputs
  const handlePersonChange = (event)=>{
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  const handleNumberChange = (event)=>{
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const personClear = (id) =>{
    console.log(`Estas intentando borrar ${id} de tu agenda.`);
    personService
      .clear(id)
      .then(clearPerson =>{
        window.confirm(`Deseas borrar ${clearPerson.id}`);
        setPersons(persons.filter(person => person.id !== id));
      });
  }

/////////
  return(

    <div>
      <h1><strong>Phonebook</strong></h1>
      <Filtro persons={persons} />
      <div>
        <h2><strong>Contactos.</strong></h2>
        <ul>
          {persons.map(person => 
            <Contac 
              key={person.id} 
              contac={person}
              clearButton={()=>personClear(person.id)} 
            />
          )}
        </ul>
      </div>

      <div>
        <h3><strong>Agregar nuevo Contacto.</strong></h3>
        <form onSubmit={addPerson}>
            <div>
              Nombre del contacto: <input type='text' value = {newName} onChange={handlePersonChange} required/>
            </div>

            <div>
              Numero del contacto: <input type='tel' pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" placeholder="00-00-00-00-00" value={newNumber} onChange={handleNumberChange} required/>
            </div>

            <div>
              <button type='submit'>Guardar contacto</button>
            </div>
        </form>
      </div>

      

    </div>
  );

}


export default App
