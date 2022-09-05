
// Aprendiendo NODE

const filesystem = require ('fs');

//filesystem.writeFile('asincrono.txt','Hola desde node');

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
/*
for(let item of arreglo)
{
    setTimeout(()=>{
        console.log(item);
    },item);
}
*/
//Crear mi primer servidor



/*
Una función que reciba un arreglo de números y devuelva su promedio.
*/
function promedioArreglo (){
    const array = [];
    let suma=0;
    for (let i = 0; i < 10; i++) {
        let rand_num = Math.floor(Math.random() * 11) ; // Numero aleatorio del 0 al 10
        array.push(rand_num);
    }
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];              
    }
    let promedio = suma/array.length;  
    console.log("Promedio arreglo = "+promedio);
}
promedioArreglo();
/*
Una función que reciba un string y escriba el string en un archivo de texto. 
Apóyate del módulo fs.
*/
function writeFile()
{
    filesystem.writeFileSync('lab9.txt','Texto lab9');
}

writeFile();
/*
Escoge algún problema que hayas implementado en otro lenguaje de programación, 
y dale una solución en js que se ejecute sobre node.
*/
function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}
let phrase = "anitalavalatina";
console.log(phrase + " ¿es un palindromo? -> "+checkPalindrome(phrase));

/*
Crea una pequeña aplicación web que al enviar una petición al servidor, 
devuelva una de las páginas que creaste anteriormente en tus laboratorios.
*/
const http = require('http');
const html = filesystem.readFileSync("../html/index.html"); 
const server = http.createServer( (request,response) => {
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
    response.write(html);
    
    response.end();

});

server.listen(3000); //Numero de puerto

