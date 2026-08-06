const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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

function add() {
    const inputValue = getUserInputAsNumber();
    // const description = `${currentResult} + ${inputValue}`;
    const initialResult = currentResult;
    currentResult += inputValue;
    // currentResult = currentResult + +userInput.value;
    // outputResult(currentResult, description);
    writeOutput("+", initialResult, inputValue);
    const logEntry = {
        operation: "addition",
        lefOperand: initialResult,
        rightOperand: inputValue,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

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