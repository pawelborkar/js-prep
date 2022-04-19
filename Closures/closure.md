## What is a closure?

-   Closure is a combination of functions bundled together (a function inside a function) where the inner function will have access to the variables and functions above it (to its parent and grandparent functions)

-   A closure is formed when a function is declared (not executed).
-   The inner function will have a reference to the variables and functions of the parent function as it forms a closure with it.

---
> Example:

```javascript
const parentFunction = () => {
    const name = "Pawel";

    const childFunction = () => {
        console.log(`Hello ${name}`);
    };
    return childFunction;
};

const result = parentFunction();

console.log(name)   // Reference Error: name is not defined.

result();   // OUTPUT: Hello Pawel

```

---
- In the example above,  `childFunction` has a reference stored in the memory to the variable `name` present in the lexical scope of the `parentFunction`. 

- Thus `childFunction` can access variables and functions defined in the `parentFunction` and also in the `global scope`

- Varibale `name` cannot be accessed outside of the `parentFunction` scope. Thus making `name` a private variable, which is accessible only inside of the `parentFunction`

---

>2.Example:


```javascript
let x = 1;

const outerFunction = () => {
    let numOut = 5;

    console.log("--------- Outer Function's output---------");
    console.log(x);
    console.log(numOut);

    const innerFunction = () => {
       
        console.log("--------- Inner Function's output---------");
       
        console.log(x+=1);
        console.log(numOut);
        console.log(numOut += 10);
       
    };
    return innerFunction;
};

// outerFunction()     // 1 5
const result = outerFunction()
result();        
result()
result()

outerFunction()
console.log(x);

```
---
- In the above code the `numOut` variable is incremented by the `innerFunction` in its local storage only whereas the `numOut` present in the `outerFunction` remains unchanged.

- Although the `global` variable `x` changes since it's present in the global scope and not in the local scope of the `outerFunction`. This is because after execution the `outerFunction` gets removed from the memory and the call stack whereas the variables declared in the `global` scope remains in the memory until the complete execution of the code