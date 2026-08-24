const sayHello = (name) => {
    console.log("Hi " + name);
};


const sayHelloWithTwoParameters = (name, phrase) => {
    console.log(phrase, name);
};
const sayHelloWithNoParameters = () => {
    console.log("Hi");
};
const sayHelloWithOneReturnedValue = (name) => "Hi" + name;

sayHello("Jarne");
sayHelloWithTwoParameters("Jarne", "Bonjour");
sayHelloWithNoParameters();
console.log(sayHelloWithOneReturnedValue("Jarne"));


const sayHelloWithDefaultValue = (name, phrase = "Howdy") => {
    console.log(phrase, name);
};

sayHelloWithDefaultValue("Jarne", "Bonjour");


const checkInput = (callbackFunction, ...inputs) => {
    let hasEmptyString = false;
    for (const input of inputs) {
        if (!input) {
            hasEmptyString = true;
            break;
        }
    }
    if (!hasEmptyString) {
        callbackFunction();
    }
};

checkInput(
    () => {
        console.log("No string is empty.");
    },
    "This",
    "is",
    "a",
    "string",
);
