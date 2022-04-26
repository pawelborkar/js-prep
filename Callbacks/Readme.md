# Callback Functions

-   A callback function is a function which is passed as an argument to another function which is then invoked inside the function in which we've passed it (i.e.outer function) to complete some kind of routine or action.

<br>

```javascript
function greetUser(name) {
    // Here is a simple function which takes a name as an argument when we call it and prints the name with a prefix "Hello"
    console.log(`Hello ${name}`);
}

function processUserInput(callbackFunction) {
    // Here's another function which takes a function as it's argument when we call it and the function passed which is called a callback function.

    const name = prompt("Enter your Name: ");
    callbackFunction(name); // Executing the callbackFunction
}

processUserInput(greetUser); // Here greetUser is a callback function since its being passed as an argument to another function called 'processUserInput'

// NOTE: alert and prompt are web apis present only in browser so running the above code in node will thrown a Reference Error of not defined.
```

