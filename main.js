function validateEmail(){                
	// Get our input reference.
	const emailField = document.getElementById('email');
	
	// Define our regular expression.
	const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){
		valido.innerText = "válido extraoficialmente";
		return true;
	}else{
		valido.innerText = "Please provide a valid email";
		return false;
	}
} 