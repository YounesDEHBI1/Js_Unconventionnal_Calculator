// Set a default result
const defaultResult = 0;

// Output default result
let currentResult = defaultResult;

// Try to display a test result
currentResult = (currentResult + 10) * 3 / 2 - 1;

console.log(currentResult);

// Try to display the corresponding result
let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

// Assign operation & result to their appropriate fields
outputResult(currentResult, calculationDescription);
