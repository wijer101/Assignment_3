// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attach the processEntry function to the click event of the Calculate button
    document.getElementById('calculate').addEventListener('click', processEntry);
});

// $() function (optional)
function $(selector) {
    return document.querySelector(selector);
}

// Event handler for the Calculate button click
function processEntry() {
    // Get the user's entry
    var userEntry = parseFloat($('#change_amount').value);

    // Check if the entry is a number between 0 and 99
    if (!isNaN(userEntry) && userEntry >= 0 && userEntry <= 99) {
        // Call the makeChange function and pass the user's entry
        makeChange(userEntry);
    } else {
        // Display an alert for the error
        alert('Please enter a valid number between 0 and 99.');
    }
}

// Function to calculate and display change
function makeChange(userEntry) {
    // Calculate the number of quarters
    var quarters = Math.floor(userEntry / 25);
    userEntry = userEntry % 25;

    // Calculate the number of dimes
    var dimes = Math.floor(userEntry / 10);
    userEntry = userEntry % 10;

    // Calculate the number of nickels
    var nickels = Math.floor(userEntry / 5);
    userEntry = userEntry % 5;

    // The remaining value after quarters, dimes, and nickels is the number of pennies
    var pennies = Math.round(userEntry / 1);

    // Display the results in the respective text boxes
    $('#quarters').value = quarters;
    $('#dimes').value = dimes;
    $('#nickels').value = nickels;
    $('#pennies').value = pennies;
}

