console.log("APRENDIENDO EXPRESS");

const express = require('express');
const app = express();

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

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
    //Nunca poner un next() despues de una respuesta, puede causar errores 
});

app.listen(3000);