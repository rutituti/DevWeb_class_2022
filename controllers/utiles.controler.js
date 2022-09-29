
const { info } = require('console');
const path = require('path');
const Utiles = require('../models/utiles.model');

exports.get_new = (request, response, next) => {
    response.render(path.join('utiles','new.ejs'));
    
};

exports.post_new = (request, response, next) => {
    const articulo = new Utiles(request.body.nombre,request.body.precio, request.body.descripcion, request.body.imagen);
    articulo.save();
    request.session.ultimo_articulo = articulo.nombre;
    response.setHeader('Set-Cookie', 'nombre_cookie=chocolate');
    response.redirect('/utiles');
};

exports.get_root = (request, response, next) => {
    

    response.render(path.join('utiles','list.ejs'),{
        utiles: Utiles.fetchAll(),
        ultimo_articulo: request.session.ultimo_articulo ? request.session.ultimo_articulo : '',

    });
};