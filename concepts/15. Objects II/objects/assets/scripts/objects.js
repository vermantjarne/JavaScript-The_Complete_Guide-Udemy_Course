const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "red";
movieList.style.display = "block";

const userChosenKeyName = "level";

const person = {
    "first name": "Jarne",
    age: 23,
    hobbies: ["Sports", "Cooking"],
    [userChosenKeyName]: "...",
    greet: () => {
        alert("Hi there");
    },
    1.5: "Hello"
};

person.lastName = "Vermant";
delete person.age;

// console.log(person);
// person.greet();

const keyName = "first name";
// console.log(person["first name"]);
console.log(person[keyName]);

console.log(person["1.5"]);

const copiedPerson = {...person};
const copiedPerson2 = {...person, age: 29, hobbies: [...person.hobbies]};
person.hobbies.push("Coding");
console.log(copiedPerson, copiedPerson2);

const copiedPerson3 = Object.assign({}, person);