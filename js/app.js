/* Contador de caracteres */
var maxAmount = 140;
var tweet = document.getElementById('tweet');
var characters = tweet.value.length;
button.disabled = false;

function textCounter(textField, showCountField) {
  if (textField.value.length > maxAmount){
    textField.value = textField.value.substring(0, maxAmount);
  } else {
    showCountField.value = maxAmount - textField.value.length;
  }

/* Cambiando color de contador de caracteres */
  if (characters > 120 && characters < 130) {
    message.setAttribute('style', 'color: purple');
  } else if (textField > 130 && characters <= 140){
    message.setAttribute('style', 'color: blue');
  } else if (characters <= 120){
    message.setAttribute('style', 'color: black');
  }

}

/* Imprimiendo tweet*/
function showMessage() {
  var message = document.getElementById('tweet').value;
  document.getElementById('display').innerHTML = message;
}
