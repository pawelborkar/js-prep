// Create a custom Map function similar to .map() in JS

/*
Features of .map() in JavaScript 

1. It's a higher order function means it takes a callback function as it's argument.
2. It returns an array as an output after apply the give task or logic. 
*/

const radius = [2, 8, 7, 3, 10];

// console.log(area(10));

Array.prototype.customFlat = function (callbackFunction) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(callbackFunction(this[i]));
    }
    return output;
};

const res = radius.customFlat(item => Math.floor(Math.PI * item * item))
console.log(res);


