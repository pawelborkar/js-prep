# Generator Functions

-   Regular `functions` return only one, single value (or nothing).

-   `Generator Functions` on the other hand returns **multiple values** _one after the another on demand._

-   They work with `iterables` allowing to create great data streams.

<br>

> Syntax for creating a `Generator Function`

<br>

```javascript
function* generateNames() {

    yield "Python";
    yield "JavaScript";
    yield "Rust";
    return "TypeScript";

}
```

- Generator functions behaves differently from the regular functions. 

- When such function is called, it doesn't executes the code inside it instead it returns a *special object* called `generator object`

<br>

```javascript
function* generateNames() {

    yield "Python";
    yield "JavaScript";
    yield "Rust";
    return "TypeScript";

}

let name = generateNames(); // returns a Generator Object (code hasn't executed yet.)


```

- In order to execute the code inside the generator function there's a `next()` method which we need to use.

- The `next()` will execute the code until the nearest yield `<value> ` statement  (`value` can be omitted, then it’s `undefined`).

- Then the function execution is paused and the `yield` value is return to the outer code.

- The `next()` method itself return an object with 2 values

    - `value`: The yielded value.
    - `done`: If the code execution completed then `true` otherwise `false`


