// Write a polyfill for Apply

// .apply method takes a scope and an array as an arg executes the function directly without returning it like the bind method

//--------------- Polyfill for Apply -----------------
Function.prototype.customApply = function (scope, argsArray) {
    scope._this = this;
    return scope._this(...argsArray);
};
//----------------------------------------------------

const info = {
    name: "Pawel",
    age: 20,
};

const getInfo = function (name, age) {
    return `Name: ${this.name} has an age of ${this.age} years | Other: Name: ${name}, Age: ${age}`;
};

const res = getInfo.customApply(info, ["Pawel", 21]);
console.log(res);
