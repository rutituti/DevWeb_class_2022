const express = require('express');

const router = express.Router();

const Utiles = require('../models/utiles.model');

/* SINTAXIS
router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});
*/


const comprarController = require("../controllers/comprar.controler");

router.get('/', comprarController.get_root);

module.exports = router;
