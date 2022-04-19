const Scope = (()=>{
    let count = 0

    return{
        incrementByOne: ()=> count++,
        reset : () => count = 0,
        decrementByOne: ()=> count--,
    }

})();

console.log(Scope.incrementByOne());
console.log(Scope.incrementByOne());

console.log(Scope.decrementByOne());
console.log(Scope.reset());

