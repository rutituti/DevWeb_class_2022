/*
Con JavaScript y HTML5 [y quizás CSS], desarrolla una página para 
validar passwords. La página debe tener una forma con 2 campos, 
el campo de password, y el campo de verificar password. Utiliza al máximo 
tu creatividad e ingeniería para que la página sea un validador de passwords
de estado del arte, con la mejor experiencia para el usuario.

Cogido obtenido de -> https://www.codingnepalweb.com/password-and-confirm-password-validation-javascript/
*/

const pswrd_1 = document.querySelector("#pswrd_1");
const pswrd_2 = document.querySelector("#pswrd_2");
const errorText = document.querySelector(".error-text");
const showBtn = document.querySelector(".show");
const btn = document.querySelector("button");

function active(){
  if(pswrd_1.value.length >= 6){
    btn.removeAttribute("disabled", "");
    btn.classList.add("active");
    pswrd_2.removeAttribute("disabled", "");
  }else{
    btn.setAttribute("disabled", "");
    btn.classList.remove("active");
    pswrd_2.setAttribute("disabled", "");
  }
}
btn.onclick = function(){
  if(pswrd_1.value != pswrd_2.value){
    errorText.style.display = "block";
    errorText.classList.remove("matched");
    errorText.textContent = "Error! Confirm Password Not Match";
    return false;
  }else{
    errorText.style.display = "block";
    errorText.classList.add("matched");
    errorText.textContent = "Nice! Confirm Password Matched";
    return false;
  }
}

function active_2(){
  if(pswrd_2.value != ""){
    showBtn.style.display = "block";
    showBtn.onclick = function(){
      if((pswrd_1.type == "password") && (pswrd_2.type == "password")){
        pswrd_1.type = "text";
        pswrd_2.type = "text";
        this.textContent = "Hide";
        this.classList.add("active");
      }else{
        pswrd_1.type = "password";
        pswrd_2.type = "password";
        this.textContent = "Show";
        this.classList.remove("active");
      }
    }
  }else{
    showBtn.style.display = "none";
  }
}

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
A partir de un documento o sitio de los anteriores, agrega las siguientes 
características:

    - Para los campos de una forma, o para algún texto corto del documento, 
      haz que de manera dinámica aparezca ayuda o información relevante o 
      complementaria. Usa tu creatividad.
*/
const btn_help = document.querySelector(".help");

// Desplegar y ocultar contenido con clicks
function ayuda_desplegar ()
{
    console.log("click");
    let spam = document.getElementById("id_ayuda")
    spam.innerHTML = "La contraseña debe tener minimo 6 caracteres";
    btn_help.onclick = ayuda_ocultar;  
}

function ayuda_ocultar ()
{
    console.log("click");
    let spam = document.getElementById("id_ayuda")
    spam.innerHTML = "";  
    btn_help.onclick = ayuda_desplegar;
}

btn_help.onclick = ayuda_desplegar;

