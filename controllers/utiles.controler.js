
const { info } = require('console');
const path = require('path');
const Utiles = require('../models/utiles.model');

exports.get_new = (request, response, next) => {
    response.render(path.join('utiles','new.ejs'),{
        info: '',
        utiles:'',
    });
    
};

exports.get_edit = (request, response, next) => {
    
        Utiles.fetchOne(request.params.id)
            .then( ([rows, fieldData]) => {
                response.render(path.join('utiles','new.ejs'), {
                    utiles: rows[0] ? rows[0] : '',
                    info: '',
                });
            }).catch( (error) => {
                console.log(error);
            });
    
    };

exports.post_edit = (request, response, next) => {
            
    Utiles.edit(request.body.id, request.body.nombre,request.body.precio, request.body.descripcion,request.body.imagen)
    .then( () => {
        request.session.info = "La información del articulo " + request.body.nombre + " fue actualizada exitosamente";
        response.redirect('/utiles');
    }).catch( (error) => {
        console.log(error);
    });
            
};

exports.post_new = (request, response, next) => {
    const articulo = new Utiles(request.body.nombre,request.body.precio, request.body.descripcion, request.body.imagen);
    articulo.save().then(() => {
        request.session.ultimo_articulo = articulo.nombre;
        request.session.info = "El arcitulo "+articulo.nombre+" fue creado existosamente";
        response.setHeader('Set-Cookie', 'nombre_cookie=chocolate');
        response.redirect('/utiles');
    }).catch( (error) => {
        console.log(error);
    });
            
   
};

exports.get_root = (request, response, next) => {
    
    Utiles.fetchAll().then(([rows,fieldData])=>{
        response.render(path.join('utiles','list.ejs'),{
            utiles: rows ,
            ultimo_articulo: request.session.ultimo_articulo ? request.session.ultimo_articulo : '',
            info: info,
        });

    }).catch(error => console.log(error));
};

exports.get_one = (request, response, next) => {
        
        let info = request.session.info ? request.session.info : '';
    
        request.session.info = '';
    
        Utiles.fetchOne(request.params.id)
            .then( ([rows, fieldData]) => {
    
               response.render(path.join('utiles', 'list.ejs'), {
                    utiles: rows,
                    ultimo_articulo: request.session.ultimo_articulo ? request.session.ultimo_articulo : '',
                    info: info,
                }); 
    
            }).catch( (error) => {
                console.log(error);
            });
    
     };