const path = require('path');
const Utiles = require('../models/utiles.model');

exports.get_root = (request, response, next) => {

    response.render(path.join('comprar','comprar.ejs'),{
        utiles: Utiles.fetchAll(),
    });
};