const path = require('path');
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_new = (request, response, next) => {
    let info = request.session.info ? request.session.info : '';
        request.session.info = '';
        response.render(path.join('usuarios','new.ejs'), {
            info: info,
         });
};

exports.post_new = (request, response, next) => {
    const user = new Usuario(request.body.username, request.body.password, request.body.nombre);
    user.save()
    .then(() => {
        response.redirect('/user/login');
    })
    .catch(error => console.log(error));
};
      
exports.get_login = (request, response, next) => {
        let info = request.session.info ? request.session.info : '';
        request.session.info = '';
        response.render(path.join('usuarios','login.ejs'), {
            info: info,
        });
};
    
exports.post_login = (request, response, next) => {
    Usuario.getUser(request.body.username)
        .then(([usuario, fieldData])=>{
            if (usuario.length < 1) {
                request.session.info = 'El usuario y/o contraseña son incorrectos';
                response.redirect('/user/login');
            } else {
                console.log("bcrypt");
                bcrypt.compare(request.body.password, usuario[0].password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.user = usuario[0].nombre;
                            return request.session.save(err => {
                                response.redirect('/utiles/');
                            });
                        } else {
                            request.session.info = 'El usuario y/o contraseña son incorrectos';
                            response.redirect('/user/login');
                        }
                        
                    }).catch(err => {
                        response.redirect('/user/login');
                    });
            }
        })
        .catch((error)=>{
            console.log(error);
        });
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/utiles/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};
     
        