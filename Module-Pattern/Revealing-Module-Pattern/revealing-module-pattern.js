const Scope = (()=>{
    let count = 0;

    const incrementByOne = () => count++;
    const decrementByOne = () => count--;
    const reset = () => count = 0;

    return{incrementByOne,reset, decrementByOne}
})();

// console.log(Scope.incrementByOne());


console.log(Scope.decrementByOne());
console.log(Scope.incrementByOne());

console.log(Scope.decrementByOne());
// console.log(Scope.incrementByOne());
// console.log(Scope.decrementByOne());
// console.log(Scope.decrementByOne());