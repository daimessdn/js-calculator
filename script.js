// action click for all numbers
const numbers = document.querySelectorAll(".number");
// console.log(numbers);

//  init'd calculation number
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  }
  else {
    currentNumber += number;
  }
};

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
};

// let's continue to the operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    // console.log(event.target.value);

    inputOperator(event.target.value);
  })
});

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  // console.log("equal button is pressed");

  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";

  switch(calculationOperator) {
    case "+":
      result = parseInt(prevNumber) + parseInt(currentNumber);
      break;
    case "-":
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case "*":
      result = parseInt(prevNumber) * parseInt(currentNumber);
      break;
    case "/":
      result = parseInt(prevNumber) / parseInt(currentNumber);
      break;
    default:
      return;
  }

  currentNumber = result;
  calculationOperator = "";
}

const allClear = document.querySelector(".all-clear");

allClear.addEventListener("click", () => {
  // console.log("equal button is pressed");

  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
}