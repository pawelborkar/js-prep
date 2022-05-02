const grandparent = document.querySelector("#grandparent");

const parent = document.querySelector("#parent");

const child = document.querySelector("#child");

grandparent.addEventListener("click", (e) => {
    console.log("GrandParent Clicked !");
});
parent.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Parent Clicked !");
});
child.addEventListener("click", () => {
    console.log("Child Clicked !");
});
