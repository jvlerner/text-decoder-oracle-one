

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
const text_input = document.getElementById("text_input");
const text_output = document.getElementById("text_output");
const image_output = document.getElementById("image_output");

function criptografar() {
    let text = text_input.value;
    text = text.replace("e", "enter");
    text = text.replace("i", "imes");
    text = text.replace("a", "ai");
    text = text.replace("o", "ober");
    text = text.replace("u", "ufat");
    text_output.innerHTML = text
    text_output.style.display = "flex"
    image_output.style.display = "none"
    text_input.innerHTML = "";
}

function descriptografar() {
    let text = text_input.value;
    text = text.replace("enter", "e");
    text = text.replace("imes", "i");
    text = text.replace("ai", "a");
    text = text.replace("ober", "o");
    text = text.replace("ufat", "u");
    text_input.innerHTML = "";
}

function copiar() {
}