var texto = document.querySelector(".campo-texto");
var pantalla = document.querySelector(".pantalla");
var estado = document.querySelector(".estado");

//Funciones

function verificar(){
    var mensaje = texto.value.toLocaleLowerCase();
    if(mensaje==="" && pantalla.value===""){
        estado.style.visibility="visible";
    }else{
        estado.style.visibility="hidden";
    }
}

setInterval(verificar,400);