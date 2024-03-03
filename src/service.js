    
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        try {
            // Validate Star Rating
            if (!validateStarRating()) {
                throw new Error('Please select a star rating.');
            }

            // Validate Email Format
            if (!validateEmailFormat()) {
                throw new Error('Please enter a valid email address.');
            }

            // Validate Name Format
            if (!validateNameFormat()) {
                throw new Error('Please enter a valid name.');
            }

            // Validate Contact Number Format
            if (!validateContactNumberFormat()) {
                throw new Error('Please enter a valid contact number.');
            }

            // Validate Mandatory Fields
            if (!validateMandatoryFields()) {
                throw new Error('Concerns and Message are mandatory fields.');
            }


        } catch (error) {
            alert(error.message);
            event.preventDefault(); // Prevent form submission
        }
    });
    
    function validateStarRating() {
        return document.querySelector('.star-rating input:checked') !== null;
    }

    function validateEmailFormat() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailInput = document.getElementById('email').value;
        return emailRegex.test(emailInput);
    }

    function validateNameFormat() {
        const nameRegex = /^[A-Za-z\s]+$/;
        const nameInput = document.getElementById('name').value;
        return nameRegex.test(nameInput);
    }

    function validateContactNumberFormat() {
        const contactNumberRegex = /^\d+$/;
        const contactNumberInput = document.getElementById('contactNumber').value;
        return contactNumberRegex.test(contactNumberInput);
    }

    function validateMandatoryFields() {
        const concernsInput = document.getElementById('concerns').value;
        const messageInput = document.getElementById('message').value;
        return concernsInput.trim() !== '' && messageInput.trim() !== '';
    }