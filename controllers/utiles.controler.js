
const path = require('path');
const Utiles = require('../models/utiles.model');

exports.get_new = (request, response, next) => {
    response.render(path.join('utiles','new.ejs'));
    
};

exports.post_new = (request, response, next) => {
    const articulo = new Utiles(request.body.nombre,request.body.precio, request.body.descripcion, request.body.imagen);
    articulo.save();
    response.setHeader('Set-Cookie', 'nombre_cookie=chocolate');
    response.redirect('/utiles');
};

exports.get_root = (request, response, next) => {
    const cookie = request.get('Cookie').split(';')[1].trim().split('=')[1];
    console.log(cookie);
    response.render(path.join('utiles','list.ejs'),{
        utiles: Utiles.fetchAll(),
    });
};