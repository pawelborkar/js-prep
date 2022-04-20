Array.prototype.customForEach = function (callbackFunction) {
    for (let i = 0; i < this.length; i++) {
        callbackFunction(this[i], i , this);
    }
};

const num = [1, 9, 3, 8, 4, 3, 2, 0, 7,2];

num.customForEach((i) => console.log(i));
