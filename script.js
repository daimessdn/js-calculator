// action click for all numbers
const numbers = document.querySelectorAll(".number");
// console.log(numbers);

numbers.forEach((number) => {
	// console.log(number);

	number.addEventListener("click", (event) => {
		// console.log("number is pressed");

		// console.log(event.target.value);
		updateScreen(event.target.value);
	})
})

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
	calculatorScreen.value = number;
}