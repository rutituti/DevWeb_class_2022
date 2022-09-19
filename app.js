console.log("APRENDIENDO EXPRESS");

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false})); //se pone el body parser hasta arriba para que se use en todas rutas

//Middleware
//Registrar Middlewares con funciones anonimas

/**
 * @param request peticion
 * @param response respuesta
 * @param next el siguiente middleware
 */
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// El orden de las rutas debe ser siempre de lo mas especificio a lo general
app.use('/robots/new', (request, response, next) => {
    response.send('Respuesta de la ruta "/robots/new"'); 
});

app.use('/robots', (request, response, next) => {
    response.send('Respuesta de la ruta "/robots"'); 
});



app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
    //Nunca poner un next() despues de una respuesta, puede causar errores 
});

app.listen(3000);