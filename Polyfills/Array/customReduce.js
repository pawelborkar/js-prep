const array = [2, 1, 8, 0, 4, 8, 7, 10, 6, 5, 3];

const customReduce = function (cb, initialValue) {
    let acc = initialValue || undefined;
    for (let i = 0; i < this.length; i++) {
        if (acc != undefined) {
            acc = cb(acc, this[i], i, this);
        } else {
            acc = this[i];
        }
    }
    return acc;
};

Array.prototype.customReduce = customReduce;

const sum = array.customReduce((acc, curr) => acc + curr, 0);
console.log(sum);
