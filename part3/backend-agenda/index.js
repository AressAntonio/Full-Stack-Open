//CREANDO SERVIDOR WEB CON EXPRESS
const express = require('express');
const app = express();

app.use(express.json());

//DATOS DE LA api
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

//Codigo para mostar info de la API-Agenda
const horaActual = new Date().toLocaleString();
const cantidadEntradas = persons.length;

const respuestaInfo = ()=>{
    return `
        <h1>API-AGENDA||INFO</h1>
        <p>
            La agenda tiene informacion de <strong>${cantidadEntradas}</strong> personas, 
            Ciudad de Mexico <strong>${horaActual}</strong> (Zona horaria America Central).
            <br>
            <a href="http://localhost:3001/">Regresar a pagina principal</a>
        </p>
    `;
};

//TRAYENDO RUTA PRINCIPAL DE LA API
app.get('/', (request, response)=>{

    response.send('<h1>API Agenda!</h1><br><p><a href="http://localhost:3001/api/persons">PERSONS..</a><br><a href="http://localhost:3001/api/info">INFO..</a></p>');
});

//trayendo todos los datos de la API
app.get('/api/persons', (request, response)=>{

    response.json(persons);
})

//TRAYENDO INFO DE LA API
app.get('/api/info', (request, response)=>{

    response.send(respuestaInfo());
})

//TRAYENDO INFO DE LA API POR ID
app.get('/api/persons/:id', (request, response)=>{

    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id);

    if(person){
        response.json(person);
    }else{
        response.status(404).end();
    };
    console.log(person);
    response.json(person);
})





//definicion de puerto para levantar servidor web
const PORT = 3001;
app.listen(PORT);
console.log(`Server runnig on port http://localhost:${PORT}`);