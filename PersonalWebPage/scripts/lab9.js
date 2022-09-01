
// Aprendiendo NODE

const filesystem = require ('fs');
filesystem.writeFileSync('hola.txt','Hola desde node');
filesystem.writeFile('asincrono.txt','Hola desde node');

const arreglo =[500,2234,32,213,12,34,45,444,56,7,3,2];

//Valores del arreglo
for(let item of arreglo)
{
    console.log(item);
}

//Valores de los indices
for(let item in arreglo)
{
    console.log(item);
}

//Orden valores con programacion asincrona
for(let item of arreglo)
{
    setTimeout(()=>{
        console.log(item)
    },item);
}