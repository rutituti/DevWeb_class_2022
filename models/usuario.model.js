
const db = require('../util/database');

//En un modelo
const bcrypt = require('bcryptjs');

module.exports = class Usuario 
{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_username, mi_password ,mi_nombre) {
        this.username = mi_username;
        this.password = mi_password;
        this.nombre = mi_nombre;
   
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() 
    {
        //Dentro del método del modelo que crea el usuario
        //El segundo argumento es el número de veces que se aplica el algoritmo, actualmente 12 se considera un valor seguro
        //El código es asíncrono, por lo que hay que regresar la promesa
        return bcrypt.hash(this.password, 12).then((pass_cifrado) => {
            return db.execute('INSERT INTO usuarios (username, password, nombre) VALUES (?, ?, ?)',
            [this.username, pass_cifrado, this.nombre]
            );
        }).catch(error => {console.log(error)})
                        
       
    }


}
