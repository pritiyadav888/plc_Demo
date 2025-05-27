function checkDataType() {
    const inputToCheck = document.getElementById('inputToCheck').value;
    // Check if the input contains a decimal point
    const hasDecimal = inputToCheck.includes('.');
    const resultArea = document.getElementById('resultArea');
    let message = "";

    // Try to convert the input to a number
    const convertedNumber = Number(inputToCheck);

    // Check if the conversion resulted in a valid number
    if (!isNaN(convertedNumber)) {
        if (hasDecimal) {
            message = `'${inputToCheck}' looks like a decimal number!`;
        } else {
            message = `'${inputToCheck}' looks like a whole number!`;
        }
    } else {
        message = `'${inputToCheck}' is not a number. It's text (a string)!`;
    }

    resultArea.textContent = message;
}

function clearOutput() {
    const resultArea = document.getElementById('resultArea');
    resultArea.textContent = ""; // Set the text content to an empty string
}