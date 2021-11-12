const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool!!");

reader.question("Please enter the password you wish to validate", function(input){

	
	if(input.length < 10){
        console.log("Your password is not long enough.")
    } else {
        console.log("You have succesfully validated your password!!!")
    }
	// This line closes the connection to the command line interface.
	reader.close()
});