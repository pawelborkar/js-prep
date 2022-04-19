# Hoisting is JavaScript.

- In JavaScript hoisting is a concept in which the variable and function declarations can be assigned befored they are being defined but are present in the code and thus in the memory.

- Remember the variables which we're accessing must be declared somewhere in the code otherwise we'll get a `Reference Error` of `not defined`

- Only the variables declared with `var` keyword are hoisted and generic `functions` declarations are hoisted.

- `let` and `const` are hoisted in `temporal dead zone` . Temporal Dead Zone is the time between the variables are declared with the `let` or `const` keywords and get initialized although we need to initialized the variables created with `const` keyword at the time of declaration only. Otherwise it'll thrown a `SyntaxError`

<br>

---

> Example:
```javascript

var name;   // variable declaration

var name = "Pawel" // `= "Pawel"` initialization.


// Function declaration.  Hence hoisted
function greetUser(userName){
    console.log(`Hello ${userName}, Nice to meet you.`)
}

// Function initialization.  Do not get hoisted.
const greetGuest = () => {
    console.log("Hello Guest, Please login to continue.")
}

```
---