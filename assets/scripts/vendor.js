// Get input
const userInput = document.getElementById('input-number');

// Select buttons
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

// Get Result Output
const currentResultOutput = document.getElementById('current-result');

// Get Calculation Output
const currentCalculationOutput = document.getElementById('current-calculation');

// Show operation and its result
function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
  }
  