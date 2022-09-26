const express = require('express');

const router = express.Router();


/* SINTAXIS
router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});
*/

const utilesController = require("../controllers/utiles.controler");
router.get('/new', utilesController.get_new);

router.post('/new', utilesController.post_new);

router.get('/', utilesController.get_root );



module.exports = router;

