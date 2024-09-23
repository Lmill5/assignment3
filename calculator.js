let x = prompt("Enter the first number:");
let operator = prompt("Enter an operator (+, -, *, /, %):");
let y = prompt("Enter the second number:");

while (true) {
    let x = prompt("Enter the first number:");
    if (x === null) break; // Break the loop if Cancel is clicked
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;
    let y = prompt("Enter the second number:");
    if (y === null) break;
    
    // Perform the calculation and display the result
}
let result;
if (operator === "+") {
    result = Number(x) + Number(y);
} else if (operator === "-") {
    result = Number(x) - Number(y);
} else if (operator === "*") {
    result = Number(x) * Number(y);
} else if (operator === "/") {
    result = Number(x) / Number(y);
} else if (operator === "%") {
    result = Number(x) % Number(y);
} else {
    result = "Invalid operator";
}
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
document.write("</table>");
if (isNaN(x) || isNaN(y)) {
    result = "Invalid input";
}
let results = []; // Store valid results here

// After calculations:
if (!isNaN(result)) {
    results.push(result); // Add valid result to the array
}

// Calculate summary statistics:
let min = Math.min(...results);
let max = Math.max(...results);
let total = results.reduce((acc, val) => acc + val, 0);
let avg = total / results.length;

document.write("<table>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");

