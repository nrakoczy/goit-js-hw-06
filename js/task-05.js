const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
	const name = event.target.value;
	if (name) {
		nameOutput.textContent = name;
	} else {
		nameOutput.textContent = "Anonymous";
	}
});


// nameInput.addEventListener("input", () => {
//   nameOutput.textContent = nameInput.value ? nameInput.value : "Anonymous";
// });