const parentFunction = () => {
    const name = "Pawel";

    const childFunction = () => {
        console.log(`Hello ${name}`);
    };
    childFunction();
};

const res = parentFunction();

let x = 1;
const outerFunction = () => {
    let numOut = 5;

    console.log("--------- Outer Function's output---------");
    console.log(x);
    console.log(numOut);

    const innerFunction = () => {
       
        console.log("--------- Inner Function's output---------");
       
        console.log(x+=1);
        console.log(numOut);
        console.log(numOut += 10);
       
    };
    return innerFunction;
};

// outerFunction()     // 1 5
const result = outerFunction()
result();        
result()
result()

outerFunction()

// Closure using IIFE

const privateCounter = (()=>{
    let counter = 0;
    console.log(`Initial count : ${counter}`)

    return(
        () =>{
            counter += 1;
            console.log(counter);
        }
    )

})()


privateCounter()
privateCounter()
privateCounter()
privateCounter()



const surname = "Borkar";
const fullName = () => {
    const fatherName = "Shashikant";

    const myName = () => {
        const name = "Pawel";
        console.log(`Hello ${name} ${fatherName} ${surname}.`);
    };
    return myName;
};

const userName = fullName();

// console.log(name)   // Reference Error: name is not defined.

userName()