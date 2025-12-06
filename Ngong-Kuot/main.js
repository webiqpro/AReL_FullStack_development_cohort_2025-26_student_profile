


    function submitFormData() {
        console.log("submitFormData called");
        // This function is no longer needed as form submission is handled by the event listener
        const form = document.getElementById('form1');
        // Get form field values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        console.log(email);
        // Validate fields
        if (name == "" || email == "" || message == "") {
            alert('Please fill in all fields before submitting the form.');
            return;
        }
        // Show success message
        alert('Your message has been sent successfully!');
        form.reset();
    }



