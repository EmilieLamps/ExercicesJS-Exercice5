function multiplication () {

let firstNumber = document.getElementById("firstNumber").value;
let secondNumber = document.getElementById("secondNumber").value;

firstNumber = Math.trunc(firstNumber);
let result = firstNumber*secondNumber;
alert(result);
}
