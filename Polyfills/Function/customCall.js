// Write a polyfill for call

// .call method executes the function directly without returning it like the bind method

Function.prototype.customCall = function (scope, ...args) {
    //changing the reference of `this` keyword from the function's scope to the object's scope passed as a parameter.

    scope._this = this;

    return scope._this(...args); //Executing and returning the function
};

const info = {
    name: "Pawel",
    age: 21,
};

const getInfo = function (name, age) {
    return `Name: ${this.name} has an age of ${this.age} years | Other: Name: ${name}, Age: ${age}`;
};

// call customCall on getInfo

const result = getInfo.customCall(info, "Pawel", 20);
console.log(result);
