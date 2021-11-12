const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool!!");

reader.question("Please enter the password you wish to validate: ", function(input){

	let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/i;
  let found = regex.test(input);
  console.log(found)
	if(input.length < 10){
        console.log("Your password is not long enough.")
    } else if (input.length > 10 && found === true){
        console.log("You have succesfully validated your password and it is strong!!!")
    } else {
      console.log("You have succesfully validated your password!")
    }
	// This line closes the connection to the command line interface.
	reader.close()
});