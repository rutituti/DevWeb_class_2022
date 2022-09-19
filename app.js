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

const rutas_utiles = require('./routes/utiles.routes');

// El orden de las rutas debe ser siempre de lo mas especificio a lo general
app.use('/utiles', rutas_utiles);

app.use((request, response, next) => {
    console.log('Ruta no existente');
    response.status(404).send('<h1> ERROR 404! </h1>') //Manda la respuesta
    //Nunca poner un next() despues de una respuesta, puede causar errores 
});



app.listen(3000);