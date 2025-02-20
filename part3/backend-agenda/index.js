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

//TRAYENDO RUTA PRINCIPAL DE LA API
app.get('/', (request, response)=>{

    response.send('<h1>API Agenda!</h1><br><a href="http://localhost:3001/api/persons">PERSONS..</a>');
});

//trayendo todos los datos de la API
app.get('/api/persons', (request, response)=>{

    response.json(persons);
})






//definicion de puerto para levantar servidor web
const PORT = 3001;
app.listen(PORT);
console.log(`Server runnig on port http://localhost:${PORT}`);