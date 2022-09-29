const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cokkieParser = require('cookie-parser');
const session = require('express-session');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false})); //se pone el body parser hasta arriba para que se use en todas rutas

app.use(cokkieParser());
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita

}));

//Middleware
//Registrar Middlewares con funciones anonimas

/**
 * @param request peticion
 * @param response respuesta
 * @param next el siguiente middleware
 */
app.use((request, response, next) => {
    const clicks = Number(request.cookies.numero_clicks ? request.cookies.numero_clicks : 0) + 1;
    console.log(request.cookies);
    response.setHeader('Set-Cookie', 'num_clicks=' + clicks);
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});



const rutas_utiles = require('./routes/utiles.routes');

// El orden de las rutas debe ser siempre de lo mas especificio a lo general
app.use('/utiles', rutas_utiles);

const rutaUsuarios = require('./routes/user.routes');
app.use('/user', rutaUsuarios);

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