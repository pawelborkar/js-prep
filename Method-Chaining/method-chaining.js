// Method Chaining in JavaScript

//Explain method chaining in JavaScript by implementing a calculator that performs the basic actions like add, subtract, divide, and multiply.

// calculator.add(10).subtract(4).multiply(5).divide(10)

// Using Object

const calculator = {
    total: 0,
    add: function (val) {
        this.total += val;
        return this;
    },
    subtract: function (val) {
        this.total -= val;
        return this;
    },
    multiply: function (val) {
        this.total *= val;
        return this;
    },
    divide: function (val) {
        this.total /= val;
        return this;
    },
};

calculator.add(10).subtract(4).multiply(5).divide(10);
console.log(calculator.total);

// Using Functions

const CALC = function () {
    this.total = 0;

    this.add = (val) => {
        this.total += val;
        return this;
    };
    this.subtract = (val) => {
        this.total -= val;
        return this;
    };
    this.multiply = (val) => {
        this.total *= val;
        return this;
    };
    this.divide = (val) => {
        this.total /= val;
        return this;
    };

    this.value = () => this.total;
};

const cal = new CALC();

cal.add(100).subtract(4).multiply(5).divide(10);
console.log(cal.total);
