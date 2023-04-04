const loginform = document.querySelector(".login-form");

const handleSubmit = (event) => {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		alert("Wszystkie pola muszą być wypełnione!");
	}

	console.log(`Email: ${email.value}, Password: ${password.value}`);
	event.currentTarget.reset();
};

loginform.addEventListener("submit", handleSubmit);

