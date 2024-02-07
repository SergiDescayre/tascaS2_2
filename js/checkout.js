
// Exercise 6
function validate(event) {
	event.preventDefault()
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	
	//Validate Name

	const validName = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
	
	if(!validName.test(fName.value) || fName.value.length <= 3){
		errorName.style.display="block"
		error++
	}else{
		errorName.style.display="none"
	}

	//Validate Email

	const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

	if (!validEmail.test(fEmail.value)) {
		errorEmail.style.display = "block"
		error++
	} else {
		errorEmail.style.display = "none"
	}

	//Validate Last Name

	const validLName = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/

	if(!validLName.test(fLastN.value) || fLastN.value.length <= 3){
		errorLastN.style.display="block"
		error++
	}else{
		errorLastN.style.display="none"
	}

	//Validate Password

	if(fPassword.value.length < 8){
		
		errorPassword.style.display="block"
		error++
	}else{
		errorPassword.style.display="none"
	}

	//Validate Adress

	if(fAddress.value.length <= 3){
		errorAddress.style.display="block"
		error++
	}else{
		errorAddress.style.display="none"
	}

	//Validate Phone

	const validPhone =/^[0-9]+$/

	if(!validPhone.test(fPhone.value) || fPhone.value.length <=3){
		errorPhone.style.display="block"
		error++
	}else{
		errorPhone.style.display="none"
	}


	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}

}
