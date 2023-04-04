
const slideEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

slideEl.addEventListener("input", () => {
	text.style.fontSize = `${slideEl.value}px`;
});
