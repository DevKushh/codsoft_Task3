let displayValue = '';

function appendToDisplay(value) /* Logic to enter the numbers and symbols to result box */
{
    displayValue += value;
    document.getElementById('display').value = displayValue;
    if (display.scrollWidth > display.clientWidth) 
    {
        // Calculation to how much to scroll to the left
        const scrollAmount = display.scrollWidth - display.clientWidth;
        display.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

function clearDisplay() /* Logic for Clearing the result/display box contents  */
{
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() /* Logic for Calculating Result */
{
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

