var btn = document.getElementById("asd");
btn.onclick = function(showMessage){
    var x = document.getElementById("tweet").value;
    var parrafo = document.createElement("p");
    var text = document.createTextNode(x);
    parrafo.appendChild(text);
    document.getElementById("nuevoParrafo").appendChild(parrafo);
    document.getElementById("tweet").value = "";
    document.getElementById("tweet").style.height = "30px";
    document.getElementById("message").style.color="green";
    document.getElementById("nuevoParrafo").appendChild(parrafo);   
    
}

/* Contador de caracteres 
var maxAmount = 140;
var tweet = document.getElementById('count');
var characters = tweet.value.length;
function textCounter(textField, showCountField) {
  if (textField.value.length > maxAmount){
    textField.value = textField.value.substring(0, maxAmount);
  } else {
    showCountField.value = maxAmount - textField.value.length;
  }

    
 Cambiando color de contador de caracteres 
  if (characters > 120 && characters < 130) {
    message.setAttribute('style', 'color: purple');
  } else if (textField > 130 && characters <= 140){
    message.setAttribute('style', 'color: blue');
  } else if (characters <= 120){
    message.setAttribute('style', 'color: black');
  }

 Imprimiendo tweet
function showMessage() {
  var message = document.getElementById('tweet').value;
  document.getElementById('display').innerHTML = message;
}*/



/*Traer los elementos (padres)
var base = document.getElementsByTagName("body");
var contenedor = document.getElementById("container");

//Crear los lementos (hijos)
var imagen = document.createElement("img");
var nav = document.createElement("nav");
var title = document.createElement("h1");
var list = document.createElement("ol");
var textArea = document.createElement("textarea");
var button = document.createElement("button");
            
//Dando atributos a los lementos creados
imagen.setAttribute("src", "assets/images/bike-twittercover.jpg")
nav.style.backgroundColor = "#6ad2f3";
nav.style.height = "80px";
nav.style.textAlign = "center";
title.innerText = "TWITTER";
title.style.fontSize = "xx-large";
title.style.color = "white";
textArea.setAttribute("type", "text");
textArea.id = "input";
button.type = "submit";
button.style.fontSize = "large";
clearTextArea ();


//Agregando eventos
button.onclick = showText;

//Indicando donde se encontraran los lementos creados
body.appendChild(imagen);
container.appendChild(nav);
nav.appendChild(title);
container.appendChild(textarea);
textArea.appendChild(button);

function showText(){
    event.preventDefault();
}

//Traemos los elementos
var comment = document.getElementById("textarea").value;
console.log("contador textarea", comment);

//Creamos nuevos elementos
var li = document.createElement(li);
var btnDelete = document.createElement("button");

//Damos atributos
li.innerText = comment;
li.style.fontSize = "20px";
btnDelete.innerText = "x";
btnDelete.id = "btn-delete";

//Agregamos eventos
btnDelete.onclick =removeElement;

//Indicamos su ubicacion
list.appendChild(li);
li.appendChild(btnDelete);

clearInput();
} //muestra el texto en el documento

function removeElement() {
    this.parentNode.remove()
} //Elimina el tweet

function cleartextArea(){
    textArea.value = "";
}
*/
