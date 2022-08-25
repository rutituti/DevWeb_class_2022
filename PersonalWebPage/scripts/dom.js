//DOM -> Document Object Model

let elemento_pag1 = document.getElementById("PAG1");
console.log(elemento_pag1);

// Desplegar y ocultar contenido con clicks
function desciption_pag1 ()
{
    console.log("click");
    let spam = document.getElementById("infoPAG1")
    spam.innerHTML = ": Contenido que aparece dinamicamente en la pagina";
    elemento_pag1.onclick = ocultar_desciption_pag1;  
}

function ocultar_desciption_pag1 ()
{
    console.log("click");
    let spam = document.getElementById("infoPAG1")
    spam.innerHTML = "";  
    elemento_pag1.onclick = desciption_pag1;
}

elemento_pag1.onclick = desciption_pag1;


