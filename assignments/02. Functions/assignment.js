const task3Element = document.getElementById("task-3");

function throwAlert() {
    alert("Dit is de tekst die ik gekozen heb!");
}

function throwAlertWithName(name) {
    alert(`Hallo, ${name}. Hoe gaat het met jou?`)
}

throwAlert();
throwAlertWithName("Jarne");

task3Element.addEventListener("click", throwAlert);

function concatenateStrings(string1, string2, string3) {
    return '' + string1 + string2 + string3;
}

let concatenatedString = concatenateStrings("Deze functie ", "voegt deze ", "strings samen.");
alert(concatenatedString);