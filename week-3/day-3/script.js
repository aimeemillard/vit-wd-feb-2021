// console.log('hiya')
function calculateTip() {
  // variables needed --> bill & tip amounts

  // grab value from input field & store
  var bill = document.getElementById("billAmount");
  console.log(bill.value);

  // calculate the tip value (set at 15%)
  var calcTip = bill.value * 0.15;
  console.log(calcTip);

  // create new tip amount element
  var total = document.createElement("h1");
  total.innerText = calcTip;

  // display the created tip amount
  var display = document.getElementById("display");
  display.appendChild(total);
}
