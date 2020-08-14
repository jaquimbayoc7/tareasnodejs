const express = require('express');
const { request, response } = require('express');

//creción  de una app express

const app = express();

//ruta para el home
app.use('/',(request, response)=>{

    response.send('Hola a todos que más? ');
});

//puerto a escuchar para el servidor
app.listen(3000);

