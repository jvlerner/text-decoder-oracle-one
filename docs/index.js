const regex = new RegExp(/[^a-z0-9\s{0,}]/gm); 
const text_input = document.getElementById("text_input");
const text_output = document.getElementById("text_output");
const handler_output = document.getElementById("container_handler_output");
const result_output = document.getElementById("container_result_output");

function encodeText() {
  // get text of textarea
  let text = text_input.value;
  text = text.toString();
  regex.lastIndex(0)
  // check string is lowercase and dont has special caracters
  let validateText = regex.test(text.normalize("NFD"));
  // set default handler for container
  handler_output.style.display = "flex";
  result_output.style.display = "none";

  if (text == "" || text == "undefined" || text == null || text == "null") {
    text_input.focus();
    myAlert("Você deve digitar um texto para criptografar!");
    return;
  }

  if (validateText == true) {
    text_input.focus();
    myAlert("O texto deve conter apenas letras minúsculas e sem acento!");
    return;
  }

  if (validateText == false) {
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
    return;
  }
}

function decodeText() {
  // get text of textarea
  let text = text_input.value;
  text = text.toString();
  // check string is lowercase and dont has special caracters
  let validateText = regex.test(text.normalize("NFD"));
  // set default handler for container
  handler_output.style.display = "flex";
  result_output.style.display = "none";

  if (text == "" || text == "undefined" || text == null || text == "null") {
    text_input.focus();
    myAlert("Você deve digitar um texto para descriptografar!");
    return;
  }

  if (validateText == true) {
    text_input.focus();
    myAlert("O texto deve conter apenas letras minúsculas e sem acento!");
    return;
  }

  if (validateText == false) {
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
    return;
  }
}

function copyText() {
  let copyText = text_output.innerText;
  navigator.clipboard.writeText(copyText);
}

function myAlert(text){
    alert(text)
}