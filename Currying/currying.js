const add = (a) => (b) => console.log(a + b);

add(10)(20);

function addr(a) {
    return function (b) {
        return function () {
            return a + b;
        };
    };
}

console.log(addr(11)(11)());

// real world example

obj = {
    name: "pawel",
    age: 21,
};

const getUserName = (obj) => (name) => console.log(obj[name]);


const res = getUserName(obj)
// console.log(res);
res('name')