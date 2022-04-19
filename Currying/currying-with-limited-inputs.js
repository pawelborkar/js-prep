// Write a currying function in order to take only four inputs and return the sum

const fourSum = (...args) => {
    const storeParams = [...args];

    if (storeParams.length === 4) {
        return storeParams.reduce((a, b) => a + b, 0);
    }
};
const result = fourSum(10, 2, 5, 91);
console.log(result);
// The above function is just a normal function it's not a currying function

const sum = (...args) => {
    const storeParams = [...args];

    // If the entered arguments are 4 then return the sum of all
    if (storeParams.length === 4) {
        return storeParams.reduce((a, b) => a + b, 0);
    } else {
        // Recall the function
        const temp = (...args2) => {
            storeParams.push(Number(args2));

            if (storeParams.length === 4) {
                return storeParams.reduce((a, b) => a + b, 0);
            } else {
                return temp;
            }
        };
        return temp;
    }
};
const res = sum(1)(2)()()
console.log(res);
