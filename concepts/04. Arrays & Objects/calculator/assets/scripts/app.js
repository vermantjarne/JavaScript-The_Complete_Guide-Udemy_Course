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

function writeToLog(operation, leftOperand, rightOperand, result) {
    const logEntry = {
        operation: operation,
        leftOperand: leftOperand,
        rightOperand: rightOperand,
        result: result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const inputValue = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult += inputValue;
    writeOutput("+", initialResult, inputValue);
    // const logEntry = {
    //     operation: "addition",
    //     lefOperand: initialResult,
    //     rightOperand: inputValue,
    //     result: currentResult
    // };
    // logEntries.push(logEntry);
    // console.log(logEntries);
    writeToLog("addition", initialResult, inputValue, currentResult);
}

function subtract() {
    const inputValue = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult -= inputValue;
    writeOutput("-", initialResult, inputValue);
    writeToLog("subtraction", initialResult, inputValue, currentResult);
}

function multiply() {
    const inputValue = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult *= inputValue;
    writeOutput("*", initialResult, inputValue);
    writeToLog("multiplication", initialResult, inputValue, currentResult);
}

function divide() {
    const inputValue = getUserInputAsNumber();
    const initialResult = currentResult;
    currentResult /= inputValue;
    writeOutput("/", initialResult, inputValue);
    writeToLog("division", initialResult, inputValue, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);