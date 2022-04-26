function greetUser(name) {
    // Here is a simple function which takes a name as an argument when we call it and prints the name with a prefix "Hello"
    alert(`Hello ${name}`);
}


function processUserInput(callbackFunction) {
    // Here's another function which takes a function as it's argument when we call it and the function passed which is called a callback function.

    const name = prompt("Enter your Name: ");
    callbackFunction(name); // Executing the callbackFunction
}

processUserInput(greetUser);
