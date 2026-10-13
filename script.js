let billInput = document.querySelector("#bill");
let tipInput = document.querySelector("#tip");
let peopleInput = document.querySelector("#people");

let calculateBtn = document.querySelector("#calculateBtn");

let tipResult = document.querySelector("#tipResult");
let totalResult = document.querySelector("#totalResult");


function calculateTip() {

    let bill = Number(billInput.value);
    let tipPercentage = Number(tipInput.value);
    let people = Number(peopleInput.value);

    let tipAmount = bill * tipPercentage / 100;

    let totalAmount = bill + tipAmount;

    let tipPerPerson = tipAmount / people;

    let totalPerPerson = totalAmount / people;

    tipResult.textContent = tipPerPerson.toFixed(2);
    totalResult.textContent = totalPerPerson.toFixed(2);
}


calculateBtn.addEventListener("click", calculateTip);
 