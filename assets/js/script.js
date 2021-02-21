function getPassword(){
	const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()-+.,;?{[}]^><:";
	const passwordLength = 20;
	let password = "";

	for (let i=0; i<passwordLength; i++){
		const randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber+1);
	}
	document.getElementById("password").value = password;
}

function copyPassword(){
	const copyPassText = document.getElementById("password");
	copyPassText.select();
	copyPassText.setSelectionRange(0,9999);
	document.execCommand("copy");
}