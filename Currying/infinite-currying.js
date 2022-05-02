function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    };
}

console.log(add(10)(12)(100)(10)(12)());

// -------------------------------------------
// Using Arrow function
const add1 = (param1) => (param2) => b ? add1(param1 + param2) : param1;

console.log(add(10)(12)(10)(10)(12)());
