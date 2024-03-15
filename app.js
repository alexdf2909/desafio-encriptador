function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
  }
function encriptar(texto){
    let arreglo = texto.split("");
    let nuevoTexto = "";
    arreglo.forEach(x => {
        switch(x){
            case "a":
                x = "ai";break;
            case "e":
                x="enter";break;
            case "i":
                x="imes";break;
            case "o":
                x="ober";break;
            case "u":
                x="ufat";break;
        }
        nuevoTexto+=x;
    });
    return nuevoTexto;
}

function desencriptar(texto){
    let nuevoTexto = texto.replaceAll(/ai/gi,"a");
    nuevoTexto = nuevoTexto.replaceAll(/enter/gi,"e");
    nuevoTexto = nuevoTexto.replaceAll(/imes/gi,"i");
    nuevoTexto = nuevoTexto.replaceAll(/ober/gi,"o");
    nuevoTexto = nuevoTexto.replaceAll(/ufat/gi,"u");
    return nuevoTexto;
}
function aparienciaMensaje(){
    document.getElementById("no-encontrado").style.display="none";
    document.getElementById("btn-copiar").style.display="block";
    document.getElementById("mensaje").style.display="block";
    document.getElementById("texto-informacion").style.color="#495057";
    document.getElementById("texto-informacion").style.fontWeight="normal";
}

function mostrarMensaje(operacion){
    let texto = document.getElementById("text-area").value;
    if(validarTexto(texto)){
        aparienciaMensaje();
        let mensaje = "";
        switch(operacion){
            case 1:
                mensaje = encriptar(texto); break;
            case 2:
                mensaje = desencriptar(texto); break;
        }
        asignarTextoElemento(".mensaje",mensaje);
    }else{
        errorTexto();
    }
    
}

function copiarMensaje(){
    let texto = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(texto);
}
function validarTexto(texto){
    patron =/[áéíóú]/;
    return !patron.test(texto);
}
function errorTexto(){
    document.getElementById("no-encontrado").style.display="block";
    document.getElementById("btn-copiar").style.display="none";
    document.getElementById("mensaje").style.display="none";
    document.getElementById("texto-informacion").style.color="red";
    document.getElementById("texto-informacion").style.fontWeight="bold";
}

