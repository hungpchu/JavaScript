// UI vars
const loanForm = document.getElementById("loan-form");
const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const years = document.getElementById("years");
const monthlyPayment = document.getElementById("monthly-payment");
const totalPayment = document.getElementById("total-payment");
const totalInterest = document.getElementById("total-interest");

// Listen for submit
loanForm.addEventListener("submit", (e) => {
  // Hide results
  document.getElementById("results").style.display = "none";
  // Show loader
  document.getElementById("loading").style.display = "block";
  // Print the result after 1 second
  setTimeout(calculateResults, 1000);
  e.preventDefault();
});

function calculateResults() {
  // get the value of amount
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;

  // Compute the monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  // Hide Loader
  document.getElementById("loading").style.display = "none";

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = (monthly * calculatedPayment - principal).toFixed(2);
    // Show Results
    document.getElementById("results").style.display = "block";
  } else {
    showError("Please check your numbers");
  }
}

function showError(error) {
  // Create a div
  const errorDiv = document.createElement("div");
  // Get Elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  // Add class
  errorDiv.className = "alert alert-danger";
  // Add the text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // Insert error div above heading
  card.insertBefore(errorDiv, heading);
  // setTimeOut: have something happen for an amount of second
  // Clear error after 3 seconds
  // setTimeOut take 2 parameter: function and milisecond
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}
