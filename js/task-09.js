const buttonEl = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

buttonEl.addEventListener("click", () => {
	const changeColor = getRandomHexColor();
	document.body.style.backgroundColor = changeColor;
	colorSpan.textContent = changeColor;
});