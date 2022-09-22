const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false})); //se pone el body parser hasta arriba para que se use en todas rutas



//Middleware
//Registrar Middlewares con funciones anonimas

/**
 * @param request peticion
 * @param response respuesta
 * @param next el siguiente middleware
 */
//app.use((request, response, next) => {
//    console.log('Middleware!');
//    next(); //Le permite a la petición avanzar hacia el siguiente middleware
//});



const rutas_utiles = require('./routes/utiles.routes');

// El orden de las rutas debe ser siempre de lo mas especificio a lo general
app.use('/utiles', rutas_utiles);

const rutas_comprar = require('./routes/comprar.routes');
app.use('/comprar', rutas_comprar);

app.use('/home/Bienvenido', (request, response, next) => {
    let html = "<h1>BIENVENIDO A MI TIENDITA</h1>";
    html += '<a href="/comprar">COMPRAR</a>'
    html += '<p><a href="/utiles">Ver lista de articulos</a></p>'
    response.send(html); 
});

app.use('/home', (request, response, next) => {
   
    response.send('Hola mundo'); 
});



app.use((request, response, next) => {
    
    response.status(404);
    response.sendFile(path.join(__dirname,'views', 'error.html'));
    //Nunca poner un next() despues de una respuesta, puede causar errores 
});



app.listen(3000);