// action click for all numbers
const numbers = document.querySelectorAll(".number");
// console.log(numbers);

numbers.forEach((number) => {
	// console.log(number);

	number.addEventListener("click", () => {
		console.log("number is pressed");
	})
})