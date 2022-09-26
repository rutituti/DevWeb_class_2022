escolares = [{nombre: "Lapiz de madera",precio:'8', descripcion: 'ápiz sencillo No. 2', imagen: 'https://cdn.shopify.com/s/files/1/1051/3728/products/pencils_tombow_general_writing-5_1024x_c68c8980-793c-45c3-8da0-876e9ae37ced_700x.jpg?v=1571304233'}, 
             {nombre: "Goma Factis",precio:'12', descripcion: 'Goma suave para borrar superficies amplias',imagen: 'https://th.bing.com/th/id/OIP.027eiEJbUCCiFpXtokM4rQHaHa?pid=ImgDet&rs=1'}];

module.exports = class Utiles {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre,miprecio,mi_descrip, mi_imagen) {
        this.nombre = mi_nombre;
        this.precio = miprecio;
        this.descripcion = mi_descrip;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        escolares.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return escolares;
    }

}
