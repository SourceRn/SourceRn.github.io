let image = document.getElementById("img_text");
let mensaje = document.getElementById("texto_encriptar");
let btn_encriptar = document.getElementById("btn_encriptar");
let btn_desencriptar = document.getElementById("btn_desencriptar");
let btn_copiar = document.getElementById("btn_copiar");
let text_area = document.getElementById("texto_encriptar");
let text_square = document.getElementById("text_square");
let isText = false;
let keys = [ {key: "a", value: "ai"}, 
             {key: "e", value: "enter"}, 
             {key: "i", value: "imes"},
             {key: "o", value: "ober"}, 
             {key: "u", value: "ufat"} ];
let consonantes = [ "b", "c", "d", "f", "g", "h", 
                    "j", "k", "l", "m", "n", "p", 
                    "q", "r", "s", "t", "v", "w", 
                    "x", "y", "z" ];


function dissappearAppearImage(isText){
    if(isText) {
        image.style.display = "none";
    } else {
        image.style.display = "flex";
    }
}

function dissappearAppearCopyButton(isText){
    if(isText) {
        btn_copiar.style.display = "block";
    } else {
        btn_copiar.style.display = "none";
    }
}

function writeTextSquare(text){
    text_square.innerHTML = text;
}

function encriptarMensaje(mensaje){
    let new_message = "";

    for (let i = 0; i < mensaje.length; i++) {
        
        if(mensaje[i] == " ") {
            new_message += " ";
        }

        for (let k = 0; k < consonantes.length; k++) {
            if (mensaje[i] == consonantes[k]) {
                new_message += mensaje[i];
                break;
            }
        }

        for (let j = 0; j < keys.length; j++) {
            if (mensaje[i] == keys[j].key) {
                new_message += keys[j].value;
                break;
            }
        }
    }

    return new_message;
}

function desencriptarMensaje(mensaje_encriptado){

    let message = mensaje_encriptado;
    
    message = message.replace(/ai/gi, "a");
    message = message.replace(/enter/gi, "e");
    message = message.replace(/imes/gi, "i");
    message = message.replace(/ober/gi, "o");
    message = message.replace(/ufat/gi, "u");

    return message;
}

function transformarTexto_encriptar(){
    let text = text_area.value;
    let text_encrypt = encriptarMensaje(text.toLowerCase());
    isText = true;
    
    dissappearAppearImage(isText);
    dissappearAppearCopyButton(isText);
    writeTextSquare(text_encrypt);
}

function transformarTexto_desencriptar(){
    let text = text_area.value;
    let text_desencrypt = desencriptarMensaje(text.toLowerCase());
    isText = true;
    
    dissappearAppearImage(isText);
    writeTextSquare(text_desencrypt);
}

function copiarTexto(){
    let text = text_square.innerHTML;
    navigator.clipboard.writeText(text);
}

btn_encriptar.onclick = transformarTexto_encriptar;
btn_desencriptar.onclick = transformarTexto_desencriptar;
btn_copiar.onclick = copiarTexto;