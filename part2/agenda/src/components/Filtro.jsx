import React, { useState } from 'react';

const Filtro = ({persons}) => {
    
    const [searchTerm, setSearchTerm] = useState('buscar contacto');

    // Función para manejar el cambio en el campo de búsqueda
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrar las personas según el texto de búsqueda
    const filteredPersons = persons.filter(person =>
        person.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Buscar contacto</h2>
            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredPersons.map(person => (
                    <li key={person.id}>
                        {person.nombre} - {person.number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filtro;