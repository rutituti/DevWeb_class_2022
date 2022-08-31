

/*
Con JavaScript y HTML5 [y quizás CSS], desarrolla una página para vender 3 
productos de tu interés, con los precios y promociones a tu gusto. 
La página debe permitir al usuario escoger la cantidad de unidades de cada
producto, y debe mostrar el precio total, el IVA que se está cargando, y 
toda la información que consideres pertinente para que la experiencia del 
usuario sea la mejor. La página debe validar los rangos de las unidades de 
cada producto.
*/


/*
let num_goma = document.getElementById("id_num_goma").value;
console.log(num_goma);
let num_sacas = document.getElementById("id_num_sacas").value;
console.log(num_sacas);

let precio_goma = Number(document.getElementById("id_precio_goma").innerText);
console.log(precio_goma);
let precio_sacas= Number(document.getElementById("id_precio_sacas").innerText);
console.log(precio_sacas);
*/

let importe = document.getElementById("id_buton_calc");

function calcular_importe()
{
    //Importe Lapiz
    let num_lapiz = document.getElementById("id_num_lapiz").value;
    console.log(num_lapiz);
    let precio_lapiz = Number(document.getElementById("id_precio_lapiz").innerText);
    let importe_lapiz = num_lapiz*precio_lapiz;
    document.getElementById("id_imp1").innerHTML = "$"+importe_lapiz;
    
    //Importe Goma
    let num_goma = document.getElementById("id_num_goma").value;
    let precio_goma = Number(document.getElementById("id_precio_goma").innerText);
    let importe_goma = num_goma*precio_goma;
    document.getElementById("id_imp2").innerHTML = "$"+importe_goma;

    //Importe Sacapuntas
    let num_sacas = document.getElementById("id_num_sacas").value;
    let precio_sacas = Number(document.getElementById("id_precio_sacas").innerText);
    let importe_sacas= num_sacas*precio_sacas;
    document.getElementById("id_imp3").innerHTML = "$"+importe_sacas;

    //Importe Total
    let importe_total = importe_goma+importe_lapiz+importe_sacas;
    document.getElementById("id_total").innerHTML = "$"+importe_total;

    document.getElementById("id_total_IVA").innerHTML = "$"+(importe_total*1.16);

}

importe.onclick = calcular_importe;

/*
A partir de un documento o sitio de los anteriores, agrega las siguientes 
características:

    - Cambia el estilo de las letras de alguna parte del documento con 
      eventos diferentes a onClick.
*/



let text_style = document.getElementById("id_estilod");
let text2_style = document.getElementById("id_textod");


// Desplegar y ocultar contenido con clicks
function cambiar_estilo ()
{
    console.log("click");

    text_style.style.color = "blue";
    text_style.style.fontFamily = "Italic";
    text_style.style.fontSize = "29px";
   
}

function cambiar_estilo2 ()
{
    console.log("click");

    text2_style.style.color = "green";
    text2_style.style.fontFamily = "Arial Black";
    text2_style.style.fontSize = "29px";
   
}


text_style.onclick = cambiar_estilo;
text2_style.onclick = cambiar_estilo2;

