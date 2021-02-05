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

  //read first number
  firstnumber = document.querySelector("#firstnumber").value;

  //read second number
  secondnumber = document.querySelector("#secondnumber").value;

  //read operator -> add/multiply/divide/subtract

  //calculate
  console.log(parseInt(firstnumber) + parseInt(secondnumber));
  result = parseInt(firstnumber) + parseInt(secondnumber);

  //check rounded off? -> yes/no
  //write result at end of list¨
  //write result in 'firstnumber'
  document.querySelector("#firstnumber").value = result;
  //scroll list to bottom
}

function clearResults() {
  console.log("clearResults");

  //clear list of results
}
