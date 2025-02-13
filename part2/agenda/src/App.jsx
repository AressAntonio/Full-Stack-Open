import {useState, useEffect} from 'react';
import Contac from './components/Contacs';
import Filtro from './components/Filtro';
import personService from './services/persons';
import Notification from './components/Notification';

const App = (props)=>{

  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('a new person');
  const [newNumber, setNewNumber] = useState('00-00-00-00-00');

  const [Message, setMessage] = useState(null);

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
  const addPerson = (event) => {
    event.preventDefault();
  
    const personObject = {
      nombre: newName,
      number: newNumber,
      //id: persons.length + 1, // No es necesario, la API debería generar el ID
    };
  
    // Verificar si el objeto ya existe en la lista local
    const existingPerson = persons.find(person => person.nombre === newName);
  
    if (existingPerson) {
      // Si el usuario existe
      if (existingPerson.number === newNumber) {
        // Si el número es el mismo, mostrar un mensaje de alerta
        setNewName('');
        setNewNumber('');

        setMessage(`${newName} ya está agregado a la agenda con el mismo número.`);
        setTimeout(()=>{
          setMessage(null)
        }, 5000);

        
      } else {
        // Si el número es diferente, preguntar al usuario si desea actualizarlo
        if (window.confirm(`El usuario ${newName} ya existe con un número diferente. ¿Deseas actualizar el número a ${newNumber}?`)) {
          // Si el usuario acepta, actualizar el número en la API
          personService
            .update(existingPerson.id, personObject) 
            .then(updatedPerson => {
              // Actualizar la lista local de personas
              setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person));

              setNewName('');
              setNewNumber('');
              
            })
            .catch(console.log('Error al actualizar contacto.'));

            setMessage(`${newName} fue actualizado exitosamente.`);
              setTimeout(()=>{
                setMessage(null);
              }, 5000);

        } else {
          // Si el usuario no acepta, no hacer nada
          alert('Acción cancelada.');
          setNewName('');
          setNewNumber('');
        }
      }
    } else {
      // Si el usuario no existe, enviar la solicitud a la API
      personService
        .create(personObject)
        .then(returnedPerson => {
          console.log(returnedPerson);
          setPersons(persons.concat(returnedPerson));
          
          setNewName('');
          setNewNumber('');
        })
        .catch(console.log(`Error al crear nuevo contacto: ${newName}||${newNumber}`));

        setMessage(`${newName} fue agregado a tus contactos exitosamente.`);
        setTimeout(()=>{
          setMessage(null)
        }, 5000);
  
      
    }
  
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
    
      if(window.confirm(`¿Desea eliminar el contacto de su agenda`)){
        personService
          .clear(id)
          .then(clearPerson =>{
            setPersons(persons.filter(person => person.id !== id));

            setMessage(`Se a eliminado de su agenda a ${clearPerson.nombre}`);
          });

          setTimeout(()=>{
            setMessage(null)
          }, 5000);

      }else{
        console.log('NO SE ELIMINO EL CONTACTO DE LA AGENDA');
      };
  }

/////////
  return(

    <div>
      <h1><strong>Phonebook</strong></h1>
      <Notification message={Message} />
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
