const radius = [2, 4, 8, 10]; // radius of a circle

// calculate's area
const area = (radius) => {
    return Math.floor(Math.PI * radius * radius);
};

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, area));

// map polyfill
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

console.log(radius.calculate(diameter));
