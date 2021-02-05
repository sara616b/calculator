document.addEventListener("DOMContentLoaded", setup);

let firstnumber;
let secondnumber;
let result;
let operator;

function setup() {
  console.log("setup");

  //click calculate
  document.querySelector("#calculate").addEventListener("click", calculate);

  //click clear results
}

function calculate() {
  console.log("calculate");

  //read first and second number
  firstnumber = document.querySelector("#firstnumber").value;
  secondnumber = document.querySelector("#secondnumber").value;

  //read operator -> add/multiply/divide/subtract
  let op = document.querySelector("#operator");
  operator = op.options[op.selectedIndex].text;

  //calculate
  result = eval(firstnumber + operator + secondnumber);

  //check rounded off? -> yes/no

  //write result at end of list
  document.querySelector("#results").innerHTML += "<li>" + result + "</li>";

  //write result in 'firstnumber'
  document.querySelector("#firstnumber").value = result;

  //scroll list to bottom
  document.querySelector("#results").lastChild.scrollIntoView(false);
}

function clearResults() {
  console.log("clearResults");

  //clear list of results
}
