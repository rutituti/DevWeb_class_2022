console.log("hola mundo");
console.info("Esto es importante");
console.warn("Warning!!");
console.error("Esto es un error");
console.assert( 1 == 1);

//== compara valores
console.assert(1 == true);

console.assert(1 == "1");

//=== compara valor y tipo de dato
console.assert(1 === true);

// Variables y cosntantes

const precio = 3.99;

// var es una variable global
var robot = "atlas";// forma antigua de declaracion de variables, no recomendable

for(var i = 0; i<10; i++)
{
    console.log(i);
}

console.log(i);

// nueva forma de declarar variables, alcance local {}
let carrera = "ISDR"

console.log(carrera);

for(let j = 0; j<10; j++)
{
    console.log(j);
}
//console.log(j);// Esta linea marca error por el scope de la variable j

console.log("3" + 4 + 1);
console.log(1 + 3 + "4" );

//alert, prompt, comfirm

let nombre = prompt("Como te llamas?");
console.log("hola " + nombre);

alert("HOLA :)");


const respuesta = confirm("Tienes sueño?");

if(respuesta)
{
    console.log("NECESITAS CAFE!");
}else
{
    console.log("NO TOMES CAFE");

}

//Funciones tradicionales con parametros
function tomar_cafe ()
{
    console.log("Glu glu glu");

}

tomar_cafe();

function tomar (bebida)
{
    console.log("tomando" + bebida);

}

tomar ("té");

// ------------ funciones modernas javascript ---------------
//Funcion anonima
() =>
{

}

//Funcion
 let comer = () =>
{
    console.log("comiendo ");
}

comer();

//Funcion
const comer_variado = (comida) =>
{
    console.log("comiendo " + comida);
}

comer_variado("torta");

comer = comer_variado;

comer("sandwich");

// ARREGLOS

const arreglo = [1,2,3,"ELEMENTO"];
arreglo.push("ISDR");
arreglo[10] = "Uno mas";
console.log(arreglo);

//Arreglos asociativos

arreglo["ISDR"] = "Ingeniero en Sistemas digitales y Robotica";
console.log(arreglo);

document.write(arreglo);