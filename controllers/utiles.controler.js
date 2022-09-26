
const path = require('path');
const utiles = require('../models/utiles.model');

exports.get_new = (request, response, next) => {
    response.render(path.join('utiles','new.ejs'));
    
};

exports.post_new = (request, response, next) => {
    console.log(request.body);
    utiles.escolares.push(request.body.nombre);
    response.redirect('/utiles');
};

exports.get_root = (request, response, next) => {

    response.render(path.join('utiles','list.ejs'),{
        utiles: utiles.escolares,
    });
};