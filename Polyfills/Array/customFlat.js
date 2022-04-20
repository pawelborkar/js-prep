const radius = [[1, [19], [12]], [11], 10];
// const res = radius.flat(3)
// console.log(res);

// Alternatives using reduce and concat

const arr = [1, 4, 3, [[[2], 2], 8]];

const flatten = (arr) => {
    let out = [];
    arr.forEach((ele) => {
        if (Array.isArray(ele)) {
            out = out.concat(flatten(ele));
        } else {
            out.push(ele);
        }
    });
    return out;
};

// console.log(flatten(arr));

// Count the number of integer in the given array
const array = [
    [3, 4, [5], "hello", {}, [], { hello: 1 }, [12], 22.1, [6, [7, [8]]], 5],
];

const customFlat = (arr) => {
    let outArray = [];
    arr.forEach((item) => {
        // Check if the item is an array if yes then call the function recursively
        if (Array.isArray(item)) {
            outArray = outArray.concat(customFlat(item));
        } else if (typeof item === "number") {
            outArray.push(item);
        }
    });
    return outArray;
};

console.log(customFlat(array).length);

// Flat using reduce, concat and [...args] Spread Operator.
