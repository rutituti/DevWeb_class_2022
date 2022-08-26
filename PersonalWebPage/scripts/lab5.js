/*
1:
Entrada: un número pedido con un prompt. 
Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
Utiliza document.write para producir la salida 
*/


function get_numcubes()
{
    let num = prompt("Generar Cubos. Ingresa un numero: ");
    console.log("Numero Ingresado = " + num);
    const array_cubes = [0];
    let tabla = '<table>';
    tabla += '<tr> <td>NUMERO</td> <td>CUBO</td>  </tr>';
    for (let i = 1; i <= num; i++) {
        array_cubes.push(i*i*i);
        tabla += '<tr> <td>'+i+'</td> <td>'+array_cubes[i]+'</td></tr>';
    }
    
    console.log(array_cubes);

    //Codigo para mostrar en HTML
    document.getElementById("id_tablacubos").innerHTML = tabla;
 
}


get_numcubes();


/*

2:
Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
*/
function guess_number()
{
    let num1 = Math.floor(Math.random()*11);
    let num2 = Math.floor(Math.random()*11);

    let suma = num1 + num2;
    let concatenar = "Suma: " +num1+" + "+num2+" = "+suma;

    const start = Date.now();
    let num_us = prompt("Trata de adiviar el resultado de la SUMA de 2 numeros (0 - 10): ");
    const stop = Date.now();
    let time_s = (stop-start)/1000

    if(suma === num_us)
    {
        console.log("CORRECTO!!");
        concatenar += '<p> CORRECTO!! </p>';
    }else
    {
        console.log("FALLASTE...");
        concatenar += '<p> FALLASTE... </p>';
    }
    console.log(num1+" + "+num2+" = "+suma);
    console.log("Time taken = " + time_s);
    
    concatenar += '<p>'+"Tu respuesta = "+ num_us+'</p>'+"Time taken = " + time_s;
    document.getElementById("id_adivinaSuma").innerHTML = concatenar;

    

}

guess_number();

/*
3:
Función: contador. 
Parámetros: Un arreglo de números. 
Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
*/

function count_numbers()
{
    let cont_zeros = 0, cont_num_p = 0, cont_num_n = 0;
    const array = [];
    for (let i = 0; i < 10; i++) {
        let rand_num = Math.floor(Math.random() * 201) -100; // Numero aleatorio del -100 al 100
        array.push(rand_num);
    }
    console.log(array);
    for (let i = 0; i < array.length; i++) {
       
        if(array[i] < 0)
        {
            cont_num_n++;//Contar numeros Negativos

        }else if(array[i] > 0)
        {
            cont_num_p++; //Contar numeros positivos
        }else
        {
            cont_zeros++;//Contar zeros
        }        
    }
    console.log("Numeros positivos = "+cont_num_p+"\nNumeros negativos = "+cont_num_n+"\nCeros = "+cont_zeros);

    //CODIGO PARA VERLO EN EL HTML
    let concatenar =  array;
    concatenar +=  '<p>'+"Numeros positivos = "+cont_num_p+'</p>'+'<p>'+"Numeros negativos = "+cont_num_n+'</p>'+"Ceros = "+cont_zeros;
    document.getElementById("id_contador").innerHTML = concatenar;
}

count_numbers();

/*
4:
Función: promedios. 
Parámetros: Un arreglo de arreglos de números. 
Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
*/

function promedio_fila()
{
    const filas = 4;
    const columnas = 3;
    let matrix = Array.from(Array(filas),()=>new Array(columnas));
    
    const array = [];
    let concatenar;
    concatenar = '<p>'+"Matriz de numeros ("+filas+","+columnas+")"+'</p>';
    //Llenar matriz
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            matrix[i][j] = Math.floor(Math.random()*11);            
        }
        concatenar += '<p>'+matrix[i]+'</p>';
    }
    //Sacar promedios
    const promedios = [];
    
    for (let i = 0; i < filas; i++) {
        let suma  = 0;
        for (let j = 0; j < columnas; j++) {
            suma = suma +  matrix[i][j];  
                
        }
        let promedio = suma/columnas;  
        promedios.push(promedio.toFixed(2));
        
    }

    console.log(matrix);
    console.log(promedios);

     //CODIGO PARA VERLO EN EL HTML
    concatenar += '<p>'+"Promedio por fila"+'</p>'+promedios;
    
     document.getElementById("id_promedios").innerHTML = concatenar;

}

promedio_fila();


/*
5:
Función: inverso. 
Parámetros: Un número. 
Regresa: El número con sus dígitos en orden inverso.
*/

function num_inverted()
{
    let number = prompt("Invertir Digitos. Ingresa un numero (trata de que sea uno largo): ");
    const numero_inv = number.toString().split("").reverse().join("");
    console.log("Original: "+number+"\nInvertido: "+numero_inv);

    let concatenar = '<p>'+"Numero Original"+'</p>'+number;

    concatenar += '<p>'+"Numero Invertido"+'</p>'+numero_inv;
    
    document.getElementById("id_inverso").innerHTML = concatenar;

}

num_inverted();

/*
6:TODO
Crea una solución para un problema de tu elección 
(puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, 
un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). 
El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, 
utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. 
Muestra los resultados en el documento HTML.
*/