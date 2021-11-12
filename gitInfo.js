/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is a version control software. It runs locally on your machine and allows you to create snapshots of your files and the changes you have made to them. It allows you to be able to look at those in the future and even revert a project back to a specific snapshot or commit.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is a website that can work in conjunction with your Git software in order to send all of your repositories and their snapshots onto a web server. You can use this almost as a back up to your local files and repositories, and you can use it as a way of sharing your code and project with others";

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = {
    description:"The init command is used to initialize a repository within the folder you are currently navigated to in your terminal or command",
    code:"git init"
};

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = {
    description:"The clone command is used to clone an existing repository that is located either in another directory or on the GitHub website.",
    code:"git clone"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {
    description:"The status command allows you to see in your terminal or command the state of the current repository. It allows you to see if you have made any changes to any tracked files or if you have any new files that are currently untracked.",
    code:"git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = {
    description:"The add command is used to add any untracked files or changed files into staging before commiting it to your repository snapshot.",
    code:"git add ."
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {
    description:"The commit command is used after you have added your untracked or changed and it commits that version of your files and projects into a snapshot or version at that time.",
    code: `git commit -m "message about your commit"`
}


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {
    description:"The push command is used when you want to send your newly commited snapshot or version up to the servers on the GitHub website.",
    code:"git push"
}