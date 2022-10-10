const express = require('express');

const router = express.Router();

const isAuth = require('../util/is_auth');


/* SINTAXIS
router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});
*/

const utilesController = require("../controllers/utiles.controler");
router.get('/new', utilesController.get_new);

router.post('/new', utilesController.post_new);

router.get('/edit/:id', utilesController.get_edit);

router.post('/edit', utilesController.post_edit);

router.get('/:id', utilesController.get_one);

router.get('/', isAuth, utilesController.get_root );



module.exports = router;

