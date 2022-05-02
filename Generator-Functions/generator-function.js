function* generateNames() {
    yield "Python";
    yield "JavaScript";
    yield "Rust";
    return "TypeScript";
}

let name = generateNames() // On calling the generator function it doesn't runs the code it simply returns a special object call "Generator Object"


console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());

