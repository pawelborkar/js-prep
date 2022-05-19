// Flatten the given object to one level of

// Declare an object
let ob = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91 - 999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG",
    },
};

// Declare a flatten function that takes
// object as parameter and returns the
// flatten object

const flattenObject = (obj) => {
    let resultObj = {};

    for (const i in obj) {
        if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
            const temp = flattenObject(obj[i]);

            for (const j in temp) {
                resultObj[i + "." + j] = temp[j];
            }
        } else {
            resultObj[i] = obj[i];
        }
    }
    return resultObj;
};

console.log(flattenObject(ob));
