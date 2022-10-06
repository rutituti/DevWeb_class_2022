const path = require('path');
const Usuario = require('../models/usuario.model');

const usuario = require ('../models/usuario.model')

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/utiles/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_new = (request, response, next) => {
    response.render(path.join('usuarios','new.ejs'),{
        info:'',
    });
};

exports.post_new = (request, response, next) => {
    const usuario = new Usuario(request.body.username, request.body.password, request.body.nombre);
    usuario.save()
    .then(() => {
        request.redirect('user/login');
    })
    .catch(error => console.log(error))
};
      
exports.get_login = (request, response, next) => {
    response.render(path.join('usuarios','login.ejs'),{
        info:'',
    });
};
      
        