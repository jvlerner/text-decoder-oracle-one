
const re = /([a-z0-9])\s\w+/;

const text_input = document.getElementById("text_input");
const text_output = document.getElementById("text_output")
const handler_output = document.getElementById("container_handler_output")
const result_output = document.getElementById("container_result_output")

function encodeText() {
    let text = text_input.value;
    text = text.toString();
    handler_output.style.display = "flex"
    result_output.style.display = "none"
    if (text != "") {
        if (re.test(text)) {
            text = text.replaceAll("e", "enter");
            text = text.replaceAll("i", "imes");
            text = text.replaceAll("a", "ai");
            text = text.replaceAll("o", "ober");
            text = text.replaceAll("u", "ufat");
            text_output.innerHTML = text
            handler_output.style.display = "none"
            result_output.style.display = "flex"
            result_output.style.flexDirection = "column"
            text_input.value = "";
        }else{
            alert("O texto deve conter apenas letras minúsculas e sem acento!")
        }  
    }else(
        alert("Você deve digitar um texto para criptografar!")
    ) 
}

function decodeText() {
    let text = text_input.value;
    text = text.toString();
    handler_output.style.display = "flex"
    result_output.style.display = "none"
    if (text != "") {
        if (re.test(text)) {
            text = text.replaceAll("enter", "e");
            text = text.replaceAll("imes", "i");
            text = text.replaceAll("ai", "a");
            text = text.replaceAll("ober", "o");
            text = text.replaceAll("ufat", "u");
            text_output.innerHTML = text
            handler_output.style.display = "none"
            result_output.style.display = "flex"
            result_output.style.flexDirection = "column"
            text_input.value = "";
        }else{
            alert("O texto deve conter apenas letras minúsculas e sem acento!")
        }  
    }else(
        alert("Você deve digitar um texto para criptografar!")
    ) 
}

function copyText() {
  let copyText = text_output.innerText;
  navigator.clipboard.writeText(copyText);
}