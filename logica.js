var texto = document.querySelector(".campo-texto");
var pantalla = document.querySelector(".pantalla");
var estado = document.querySelector(".estado");

var botonCopiar = document.querySelector(".boton-copiar");

//Funciones

function verificar(){
    var mensaje = texto.value.toLocaleLowerCase();
    if(mensaje==="" && pantalla.value===""){
        estado.style.visibility="visible";
        botonCopiar.style.visibility="hidden";
    }else{
        estado.style.visibility="hidden";
        botonCopiar.style.visibility="visible";
    }
}

function encriptar(){
    var mensaje = texto.value.toLocaleLowerCase();
    console.log(mensaje);
    console.log("funciona");
    var iterador = 0;
    var encriptado="";

    while(iterador<mensaje.length){
        switch(mensaje[iterador]){
            case "e":
                encriptado+="enter";
                break;
            
            case "i":
                encriptado+="imes";
                break;
            
            case "a":
                encriptado+="ai";
                break;
            
            case "o":
                encriptado+="ober";
                break;

            case "u":
                encriptado+="ufat";
                break;

            default:
                encriptado+=mensaje[iterador];
                break;
        }
        iterador++;
    }
    texto.value="";
    pantalla.innerText=encriptado;
}

function desencriptar(){
    var mensaje = texto.value.toLocaleLowerCase();
    var desencriptado = mensaje.replace(/enter/g,"e") /*se remplaza globalmente*/
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");

    texto.value="";
    pantalla.innerText=desencriptado;
}

function copiar(){
    pantalla.select();
    document.execCommand("copy");
}
verificar();
setInterval(verificar,400);


var botonEncriptar = document.querySelector(".boton-encriptar");
botonEncriptar.onclick=encriptar;

var botonDesencriptar = document.querySelector(".boton-desencriptar");
botonDesencriptar.onclick=desencriptar;

botonCopiar.onclick=copiar;