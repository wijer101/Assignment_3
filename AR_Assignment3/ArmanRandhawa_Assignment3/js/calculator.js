document.addEventListener('DOMContentLoaded', function () {
    var calculateButton = document.getElementById('calculate');
    var clearButton = document.getElementById('clear');
    var subtotalField = document.getElementById('subtotal');
    var taxRateField = document.getElementById('tax_rate');

    // Move cursor to Subtotal field on application start
    subtotalField.focus();

    // Event handler function to process entries, calculate sales tax and total
    function processEntries() {
        var subtotal = parseFloat(subtotalField.value);
        var taxRate = parseFloat(taxRateField.value);

        // Data validation
        if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
            alert("Subtotal must be > 0 and < 10000");
            return;
        }

        if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
            alert("Tax Rate must be > 0 and < 12");
            return;
        }

        // Calculate sales tax and total
        var salesTax = (subtotal * taxRate) / 100;
        var total = subtotal + salesTax;

        // Display results
        document.getElementById('sales_tax').value = salesTax.toFixed(2);
        document.getElementById('total').value = total.toFixed(2);

        // Move cursor to Subtotal field after calculation
        subtotalField.focus();
    }

    // Function to clear Subtotal field
    function clearSubtotal() {
        subtotalField.value = '';
    }

    // Function to clear Tax Rate field
    function clearTaxRate() {
        taxRateField.value = '';
    }

    // Function to clear all fields
    function clearFields() {
        clearSubtotal();
        clearTaxRate();
        document.getElementById('sales_tax').value = '';
        document.getElementById('total').value = '';
        document.getElementById('subtotal_message').innerText = '';

        // Move cursor to Subtotal field after clearing
        subtotalField.focus();
    }

    // Attach processEntries function to the click event of the "Calculate" button
    calculateButton.addEventListener('click', processEntries);

    // Attach clearFields function to the click event of the "Clear" button
    clearButton.addEventListener('click', clearFields);

    // Attach clearSubtotal function to the click event of the Subtotal text box
    subtotalField.addEventListener('click', clearSubtotal);

    // Attach clearTaxRate function to the click event of the Tax Rate text box
    taxRateField.addEventListener('click', clearTaxRate);
});
