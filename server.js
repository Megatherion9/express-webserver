// Video 69

// Servidor Express
const express = require('express');
const app = express();
const hbs = require('hbs');

// Importar Helpers
require('./hbs/helpers');


// Variable de entorno de Heroku para guardar el puerto que va a asignar
const port = process.env.PORT || 3000;


// Middleware: Un callback que se va a ejecutar siempre, no importando que url el usuario solicite.
app.use(express.static(__dirname + '/public'));


// Express Handlebars (HBS) Engine y Registrar Parciales
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


// Obtener el Home
app.get('/', (req, res) => {

    res.render('home', {
    	nombre: 'fAtItO y rOcIo',
    });
});


// Obtener el About
app.get('/about', (req, res) => {

    res.render('about', {
    	anio: new Date().getFullYear()
    });
});

// Definir el puerto a utilizar
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});