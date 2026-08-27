// #1
const task1ById = document.getElementById("task-1");
const task1BySelector = document.querySelector("ol li:first-of-type");
task1ById.style.backgroundColor = "black";
task1BySelector.style.color = "white";

// #2
const documentTitleBySelectorOnDocument = document.querySelector("title");
const documentTitleBySelectorOnHead = document.head.querySelector("title");
documentTitleBySelectorOnDocument.textContent = "Assignment - Solved!";

// #3
const h1 = document.querySelector("h1");
h1.textContent = "Assignment - Solved!"