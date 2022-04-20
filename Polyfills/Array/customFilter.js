Array.prototype.customFilter = function (callbackFunction, thisArgs) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFunction.call(thisArgs, this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

const num = [2, 1, 4, 8, 9, 3];
const res = num.customFilter((item) => item > 3);
console.log(res);
