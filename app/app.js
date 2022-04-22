// Crear mi primer server
//utilizando objeto express:
const express = require('express');
//app en express:
const app = express();
//Puerto en que vamos a ver nuestra app: localhost: 3000
const port = 3000;

//path inicial, responderá a la url  localhost:3000
app.get('/', (req, res) => {
    res.send('hello world');
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})
//  Agregar una nueva ruta:
// Agrega una ruta nueva para poder responder algo en la url localhost:3000/launchx:
//respondiendo texto localhost:3000/launchx:
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a LaunchX');
})
//Agregar nueva ruta para regresar un objeto:
    //Regresando un objeto
    //localhost:3000/explorersInNode:
    app.get('/explorersInNode', (req, res) => {
        const explorer = {name: "Explorer", msg: "Hello"}
        res.send(explorer);
    })
/* Agregar una nueva ruta que reciba Query Params
Agrega una nueva ruta, indica que recibirá un parámetro: /explorers/:explorerName, 
esto indicará que :explorerName será un valor enviado por la url.
El objeto req contiene la propiedad params, 
esta propiedad contiene los Query Params (parámetros) enviados por la url. (req.params) */
// Query Params : Recibir parámetros por la url
// https://localhost:3000/Explorers/luis
//req.params = { "explorerName" : "luis"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
})