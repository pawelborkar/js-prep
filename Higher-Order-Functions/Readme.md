# Higher Order Functions

-   Functions is JavaScript are **first class citizens**, it means that functions is JavaScript can receive another functions as it's _arguments_ and can be _assigned to a variable_ or can be _returned by another function_ as it's output.

-   A function which receives another function as it's argument or returns a function as it's output is known as a `Higher Order Function`

-   The function is passed into a function as an argument is known as a `callback function`

---

> Example: map, filter, reduce, etc are all higher order functions in javascript.

<br>

```javascript
const radius = [2, 4, 8, 10]; // radius of a circle

// calculate's area
const area = (radius) => {
    return Number(Math.PI * radius * radius);
};

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, area)); // [ 12, 50, 201, 314 ]
```

---

> Map polyfill

```javascript
const diameter = (radius) => {
    return 2 * radius;
};
Array.prototype.calculate = function (logic) {
    const outputArray = [];
    for (let i = 0; i < this.length; i++) {
        outputArray.push(logic(this[i]));
    }
    return outputArray;
};

console.log(radius.calculate(diameter)); // [ 4, 8, 16, 20 ]
```
