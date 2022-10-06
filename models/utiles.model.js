
const db = require('../util/database');

module.exports = class Utiles {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre,miprecio,mi_descripcion, mi_imagen, mi_tipo_id) {
        this.nombre = mi_nombre;
        this.descripcion = mi_descripcion ? mi_descripcion : 'Agregue una descripcion';
        this.imagen = mi_imagen ? mi_imagen : 'https://th.bing.com/th/id/OIP.SphiExhMc_acht6UyJ9XTQHaE8?pid=ImgDet&rs=1';
        this.precio = miprecio;
        this.tipo_id = mi_tipo_id ? mi_tipo_id : 1; 
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {

        return db.execute('INSERT INTO utiles (nombre, descripcion, imagen, precio, id_tipo) VALUES (?, ?, ?, ?, ?)',
        [this.nombre, this.descripcion, this.imagen, this.precio, this.tipo_id]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM utiles'); //codigo asincrono
       
    
    }

}
