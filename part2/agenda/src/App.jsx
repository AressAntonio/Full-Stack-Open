import {useState} from 'react';
import Contac from './components/Contacs';
import Filtro from './components/Filtro';

const App = (props)=>{

  const [persons, setPersons] = useState(props.persons);

  const [newName, setNewName] = useState('a new person');
  const [newNumber, setNewNumber] = useState('00-00-00-00-00');

  const addPerson = (event)=>{
    event.preventDefault();

    const personObject = {
      nombre: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    
    const exists = persons.some(person => person.nombre === newName || person.number === newNumber);

    if(exists){
      alert(`${newName} ya está agregado a la agenda.`)
    }else{
      setPersons(persons.concat(personObject));
      alert(`${newName} fue agregado a tus contactos exitosamente.`);
    }
    
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
      <Filtro persons={persons} />
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
