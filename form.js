
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); 
    const inputs = form.querySelectorAll('input, textarea');
    const errorMessage = document.getElementById("error-message");

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // check if any input is empty
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        if (!isValid) {
            event.preventDefault();
            errorMessage.style.display = 'block';
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.value.trim() !== '') {
                input.style.borderColor = '';
                errorMessage.style.display = 'none';
            }
        });
    });

    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && document.activeElement !== submitButton) {
                event.preventDefault();
            }
        });
    });
});