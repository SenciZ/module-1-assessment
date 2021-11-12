const readline = require("readline");
const figlet = require("figlet");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool!!");

reader.question(
  "Please enter the password you wish to validate: ",
  function (input) {
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/i;
    let regex2 = /[0-9]/i;
    let found = regex.test(input);
    let found2 = regex2.test(input);
    if (input.length < 10) {
      //Initial check to see if entered password is at least 10 characters long
      console.log("Your password is not long enough.");
    } else if (input.length > 10 && found2 === true && found === true) {
      //Check to see if entered password is at least 10 characters and if it contains 1 or more special character AND 1 or more number
      console.log(figlet.textSync("GREAT SUCCESS!!!"));
      console.log(
        "You have succesfully validated your password and it is VERY STRONG!!!!"
      );
    } else if (input.length > 10 && found2 === true || found === true) {
      //Check to see if entered password is at least 10 characters and if it contains 1 or more special character or 1 or more number
      console.log(figlet.textSync("VERY NICE"));
      console.log(
        "You have succesfully validated your password and it is STRONG!!!"
      );
    } else {
      //If the entered password is at least 10 characters long but does not contain any numbers or special characters
      console.log(figlet.textSync("SUCCESS"));
      console.log("You have succesfully validated your password!");
    }
    // This line closes the connection to the command line interface.
    reader.close();
  }
);
