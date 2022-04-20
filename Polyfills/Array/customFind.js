Array.prototype.customFind = function (callbackFunction) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFunction.call(this[i], i, this)) {
            return this[i];
        }
    }
};

const num = [1, 4, 2, 8, 0, 5];
const res = num.customFind((item) => item > 1);
console.log(res);
