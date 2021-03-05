function increment() {
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
  numberText++;
  h1Element.innerText = numberText;
}

function decrement() {
  var h1Element = document.getElementById("grabMe");
  var numberText = Number(h1Element.innerText);
  numberText--;
  h1Element.innerText = numberText;
}

function randomize() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}
