/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-use-before-define */
/* eslint-disable require-jsdoc */
// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  // Hide results
  // Hide Results After Calculation
  document.getElementById('results').style.display = 'none';
  // Show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments
  const X = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * X * calculatedInterest) / (X - 1);

  // Check to see if monthly value is a finite number
  // In JS we can use a method
  if (isFinite(monthly)) {
    // Insert the value into the monthlyPayment field
    // We also want decimal points toFixed
    monthlyPayment.value = monthly.toFixed(2);
    // Display total payment
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    // Display total interest
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    // Hide Loader
    document.getElementById('loading').style.display = 'none';
    // Show Results After Calculation
    document.getElementById('results').style.display = 'block';
  } else {
    // Hide Loader
    document.getElementById('loading').style.display = 'none';
    showError('Please check your numbers');
  }
}

// Show error
function showError(error) {
  // Create an error div
  const errorDiv = document.createElement('div');
  // In bootstrap, to create an alert,
  // we give it a div alert and an alert-danger

  // Get element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create a text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after a certain amount of time
  setTimeout(clearError, 3000);
}

// Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}
