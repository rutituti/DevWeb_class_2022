const express = require('express');

const router = express.Router();

const utiles = require('../models/utiles.model');

const path = require('path');

/* SINTAXIS
router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});
*/
router.get('/new', (request, response, next) => {
    response.render(path.join('utiles','new.ejs'));
    
});

router.post('/new', (request, response, next) => {
    console.log(request.body);
    utiles.escolares.push(request.body.nombre);
    response.redirect('/utiles');
});

router.get('/', (request, response, next) => {

    response.render(path.join('utiles','list.ejs'),{
        utiles: utiles.escolares,
    });
});



module.exports = router;

