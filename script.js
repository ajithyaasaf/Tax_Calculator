// Attach event listeners to input fields for real-time input validation
document.getElementById('grossIncome').addEventListener('input', validateInput);
document.getElementById('extraIncome').addEventListener('input', validateInput);
document.getElementById('deduction').addEventListener('input', validateInput);

// Event listener for form submission
// Event listener for form submission
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();
    
    var age = document.getElementById('age').value;
    var grossIncome = parseFloat(document.getElementById('grossIncome').value) || 0;
    var extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    var deductions = parseFloat(document.getElementById('deduction').value) || 0;

    // Check if age is selected
    if (!age) {
        alert("Please select age group.");
        return; 
    }

    var totalIncome = grossIncome + extraIncome - deductions;

    // Calculate tax based on age
    var tax = 0;
    if (totalIncome > 8) {
        if (age === 'below40') {
            tax = 0.3 * (totalIncome - 8);
        } else if (age === '40to60') {
            tax = 0.4 * (totalIncome - 8);
        } else {
            tax = 0.1 * (totalIncome - 8);
        }
    }

    showModal('Tax Calculation Result', 'Tax Amount: ' + tax.toFixed(2) + ' Lakhs');
});


// Function to show modal
// Function to show modal
// Function to show modal
function showModal(title, content) {
    var modalTitle = document.querySelector('.modal-title');
    var modalBody = document.querySelector('.modal-body');
    modalTitle.textContent = title;
    modalBody.textContent = content;

    var modal = document.getElementById('taxModal');
    modal.classList.add('show'); 
    modal.style.display = 'block'; 

    
    var modalFooterCloseButton = modal.querySelector('.modal-footer .btn-secondary');
    modalFooterCloseButton.addEventListener('click', function() {
        closeModal();
    });
}

// Function to close modal
function closeModal() {
    var modal = document.getElementById('taxModal');
    modal.classList.remove('show'); 
    modal.style.display = 'none'; 
}

// Function to validate input fields and display error icon
function validateInput() {
    var input = this.value;
    var errorIcon = this.nextElementSibling;
    
    if (errorIcon && isNaN(input)) {
        errorIcon.style.display = 'inline-block';
    } else if (errorIcon) {
        errorIcon.style.display = 'none';
    }
}

