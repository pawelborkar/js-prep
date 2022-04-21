// In order to construct the polyfill for Bind we need to first understand how bind works

// const res = tester.bind(pawel,'pawel',21);
// console.log(res());

/*
OUTPUT Observations:
-------------------------
1. bind returns a function 
2. It takes two arguments 
    i. object in order to operate in its scope.
    ii. Optional arguments for fallbacks
-------------------------
*/

//--------------- Polyfill for Bind -----------------
Function.prototype.customBind = function (scope, ...args) {
    scope._this = this;
    return function () {
        return scope._this(...args);
    };
};

//----------------------------------------------------

const info = {
    name: "Pawel",
    age: 21,
};

const getInfo = function (name, age) {
    return `Name: ${this.name} has an age of ${this.age} years | Other: Name: ${name}, Age: ${age}`;
};

const res = getInfo.customBind(info, "Pawel", 22);
console.log(res());
