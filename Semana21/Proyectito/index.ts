//si es que encuentran documentacion de JS
// const express = require('./express');
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

//manejando peticiones
app.get('/api', (req, res) => {
    //recibiendo variables
    console.log(req.query);
    //mandando el codigo de estado
    res.status(201);
    //mandando la respuesta
    res.send({
        "operation":"exito",
        "message":"Factura creada con éxito"
    });
});

const port = 2000;

//Escuchando peticiones
app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));