// const h1 = document.getElementById("main-title");
// h1.textContent = "Some new title!";
// h1.style.color = "white";
// h1.style.backgroundColor = "black";

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + " (changed)";

// const body = document.body;
// body.querySelector("header");

// // const listItemElements = document.querySelectorAll("li");
// const listItemElements = document.getElementsByTagName("li");

// for (const listItemElement of listItemElements) {
//     console.dir(listItemElement);
// }

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = "blue";
section.className = "red-bg visible";

button.addEventListener("click", () => {
    // if (section.className === "red-bg visible") {
    //     section.className = "red-bg invisible";
    // }
    // else {
    //     section.className = "red-bg visible";
    // }
    section.classList.toggle("visible");
    section.classList.toggle("invisible");
});

const element = document.createElement();