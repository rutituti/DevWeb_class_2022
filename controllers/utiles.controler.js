
const path = require('path');
const Utiles = require('../models/utiles.model');

exports.get_new = (request, response, next) => {
    response.render(path.join('utiles','new.ejs'));
    
};

exports.post_new = (request, response, next) => {
    const articulo = new Utiles(request.body.nombre,request.body.precio, request.body.descripcion, request.body.imagen);
    articulo.save();
    response.redirect('/utiles');
};

exports.get_root = (request, response, next) => {

    response.render(path.join('utiles','list.ejs'),{
        utiles: Utiles.fetchAll(),
    });
};