const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];



	const ingredientsList = document.querySelector("#ingredients");

// tworze nowe elementy li dla każdego elementu w tablicy ingredients
ingredients.forEach((ingredient) => {
	const ingredientsItem = document.createElement("li");
	ingredientsItem.textContent = ingredient;
	ingredientsItem.classList.add("item");

	// Dodaje element li do listy ul
	ingredientsList.appendChild(ingredientsItem);
});