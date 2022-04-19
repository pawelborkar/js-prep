function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    };
}

console.log(add(10)(12)(100)(10)(12)());

// -------------------------------------------
// Using Arrow function

const add = (param1) => (param2) => {

    if (param2) return add(param1 + param2);
    return param1;
};

console.log(add(10)(12)(100)(10)(12)());
