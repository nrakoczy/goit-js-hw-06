let counterValue = 0; //początkowa wartość


const valueEl = document.getElementById("value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');


incrementButton.addEventListener("click", () => {
	counterValue++;
	updateDisplay();
});

decrementButton.addEventListener("click", () => {
	counterValue--;
	updateDisplay();
});

function updateDisplay() {
	valueEl.textContent = counterValue;
}