
const re = /([a-z0-9])\s/g;

const text_input = document.getElementById("text_input");
const text_output = document.getElementById("text_output")
const handler_output = document.getElementById("container_handler_output")
const result_output = document.getElementById("container_result_output")

function encodeText() {
    // get text of textarea
    let text = text_input.value;
    text = text.toString();
    // check string is lowercase and dont has special caracters
    let validateText = re.test(text);
    let textLowerCase = text.toLowerCase()
    let validadeLowerCase = textLowerCase == text ? true : false;
    // set default handler for container
    handler_output.style.display = "flex";
    result_output.style.display = "none";

    console.log("Text "+text);
    console.log("Regex "+validateText);
    console.log("Text-LowerCase "+textLowerCase);
    console.log("Boolean "+validadeLowerCase);

    if (text == "" || text == "undefined" || text == null || text == "null") {
        alert("Você deve digitar um texto para criptografar!");
        text_input.focus();
        return
    }

    if (validateText == false || validadeLowerCase == false ) {
        alert("O texto deve conter apenas letras minúsculas e sem acento!");
        text_input.focus();
        return
    }

    if (validateText == true && validadeLowerCase == true) {
        console.log("Text "+text);
        console.log("Regex "+validateText);
        console.log("Text-LowerCase "+textLowerCase);
        console.log("Boolean "+validadeLowerCase);
        text = text.replaceAll("e", "enter");
        text = text.replaceAll("i", "imes");
        text = text.replaceAll("a", "ai");
        text = text.replaceAll("o", "ober");
        text = text.replaceAll("u", "ufat");
        text_output.innerHTML = text;
        handler_output.style.display = "none";
        result_output.style.display = "flex";
        result_output.style.flexDirection = "column";
        text_input.value = "";
        return
    }
 
}

function decodeText() {
    // get text of textarea
    let text = text_input.value;
    text = text.toString();
    // check string is lowercase and dont has special caracters
    let validateText = re.test(text);
    let textLowerCase = text.toLowerCase()
    let validadeLowerCase = textLowerCase == text ? true : false;
    // set default handler for container
    handler_output.style.display = "flex";
    result_output.style.display = "none";

    console.log("Text "+text);
    console.log("Regex "+validateText);
    console.log("Text-LowerCase "+textLowerCase);
    console.log("Boolean "+validadeLowerCase);

    if (text == "" || text == "undefined" || text == null || text == "null") {
        alert("Você deve digitar um texto para criptografar!");
        text_input.focus();
        return
    }

    if (validateText == false || validadeLowerCase == false ) {
        alert("O texto deve conter apenas letras minúsculas e sem acento!");
        text_input.focus();
        return
    }

    if (validateText == true && validadeLowerCase == true) {
        console.log("Text "+text);
        console.log("Regex "+validateText);
        console.log("Text-LowerCase "+textLowerCase);
        console.log("Boolean "+validadeLowerCase);
        text = text.replaceAll("enter", "e");
        text = text.replaceAll("imes", "i");
        text = text.replaceAll("ai", "a");
        text = text.replaceAll("ober", "o");
        text = text.replaceAll("ufat", "u");
        text_output.innerHTML = text;
        handler_output.style.display = "none";
        result_output.style.display = "flex";
        result_output.style.flexDirection = "column";
        text_input.value = "";
        return
    }
}

function copyText() {
  let copyText = text_output.innerText;
  navigator.clipboard.writeText(copyText);
}