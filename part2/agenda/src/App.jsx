import {useState} from 'react';
import Contac from './components/Contacs';

const App = (props)=>{

  const [persons, setPersons] = useState(props.persons);

  const [newName, setNewName] = useState('a new person');
  const [newNumber, setNewNumber] = useState('new number...')

  const addPerson = (event)=>{
    event.preventDefault();

    const personObject = {
      nombre: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
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
/////////
  return(

    <div>
      <h1><strong>Phonebook</strong></h1>

      <div>
        <h2><strong>Contactos.</strong></h2>
        <ul>
          {persons.map(person => 
            <Contac key={person.id} contac={person} />
          )}
        </ul>
      </div>

      <div>
        <h3><strong>Agregar nuevo Contacto.</strong></h3>
        <form onSubmit={addPerson}>
            <div>
              Nombre del contacto: <input type='text' value = {newName} onChange={handlePersonChange}/>
            </div>

            <div>
              Numero del contacto: <input type='phone' value={newNumber} onChange={handleNumberChange}/>
            </div>

            <div>
              <button type='submit'>guardar contacto</button>
            </div>
        </form>
      </div>

      

    </div>
  );

}


export default App
