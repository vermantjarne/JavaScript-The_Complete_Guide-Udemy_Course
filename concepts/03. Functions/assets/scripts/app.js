const defaultResult = 0;
let currentResult = defaultResult;

/**
 * Retrieves the user's input from the calculator as a number.
 * @returns The user input
*/
function getUserInputAsNumber() {
    return parseInt(userInput.value);
}

/**
 * Writes the output to the calculator, filling in the description and the result.
 * @param {*} operator The operator used in the calculation (+, -, *, /)
 * @param {*} resultBeforeCalculation The result before the calculation
 * @param {*} resultAfterCalculation The result after the calculation
 */
function writeOutput(operator, resultBeforeCalculation, resultAfterCalculation) {
    const description = `${resultBeforeCalculation} ${operator} ${resultAfterCalculation}`;
    outputResult(currentResult, description);
}

function add(/*num1, num2*/) {
    // const result = num1 + num2;
    // alert(`The result is ${result}`);
    // return result;
    // currentResult = result;
    const inputValue = getUserInputAsNumber();
    // const description = `${currentResult} + ${inputValue}`;
    const initialResult = currentResult;
    currentResult += inputValue;
    // currentResult = currentResult + +userInput.value;
    // outputResult(currentResult, description);
    writeOutput("+", initialResult, inputValue);
}

// currentResult = add(1, 2);
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

function subtract() {
    const inputValue = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult -= inputValue;
    writeOutput("-", initialResult, inputValue);
}

function multiply() {
    const inputValue = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult *= inputValue;
    writeOutput("*", initialResult, inputValue);
}

function divide() {
    const inputValue = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult /= inputValue;
    writeOutput("/", initialResult, inputValue);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);