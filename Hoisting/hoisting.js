console.log("hello");

greetUser("Pawel");

function greetUser(userName) {
    console.log(`Hello ${userName}, Nice to meet you.`);
}

    greetGuest();

    const greetGuest = () => {
        console.log("Hello Guest, Please login to continue.");
    };

const initApp = () => {
    console.log(showDateTime);
    showDateTime();
};

document.addEventListener("DOMContentLoaded", initApp, console.log("Hi"));

const showDateTime = () => {
    console.log(new Date());
};


const p = new Rectangle(); // ReferenceError: Cannot access 'Rectangle' before initialization

class Rectangle {}