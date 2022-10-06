
const db = require('../util/database');

module.exports = class TipoUtiles 
{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_descripcion) {
        
        this.descripcion = mi_descripcion ? mi_descripcion : 'Agregue una descripcion';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() 
    {

        return db.execute(
            'INSERT INTO tipo_utiles (descripcion) VALUES (?)',
            [this.descripcion]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT id, descripcion FROM tipo_utiles'); //codigo asincrono
    
    }

}
