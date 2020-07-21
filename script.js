// action click for all numbers
const numbers = document.querySelectorAll(".number");
// console.log(numbers);

numbers.forEach((number) => {
  // console.log(number);

  number.addEventListener("click", (event) => {
    // console.log("number is pressed");

    // console.log(event.target.value);
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  })
})

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
}

//  init'd calculation number
let prevNumber = "";
let calculationOperator - "";
let currentNumber;

const inputNumber = (number) => {
  currentNumber = number; 
}