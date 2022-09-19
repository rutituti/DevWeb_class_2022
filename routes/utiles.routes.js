const express = require('express');

const router = express.Router();

const models = require('../models/utiles.model');


router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});

router.get('/new', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Registrar nuevo articulo escolar</h1>";
    html += '<form action="/utiles/new" method="POST">';
    html += '<label for="nombre">Articulo: </label>';
    html += '<input type="text" id="nombre" name="nombre">';
    html += "<br><br>";
    html += '<input type="submit" id="enviar" name="enviar" value="Registrar">';
    html += "</form>";
    response.send(html); 
    
});

router.post('/new', (request, response, next) => {
    console.log(request.body);
    utiles_escolares.push(request.body.nombre);
    response.redirect('/utiles');
});

router.get('/', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Utiles escolares</h1>";
    html += '<a href="/comprar">COMPRAR</a>'
    html += "<ul>";
    for (let r of models.utiles_escolares) {
        html += "<li>" + r +"</li>";
    }
    html += "</ul>";
    response.send(html); 
});



module.exports = router;

