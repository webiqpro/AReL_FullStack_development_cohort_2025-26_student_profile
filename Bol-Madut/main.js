
  //------------------- CONTACT FORM SAVE TO ARRAY ------------------- 
const form = document.getElementById('contact-form');

let contactmessages = [];

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return; // avoid errors when form is missing

    contactForm.addEventListener('submit', function (evt) {
        evt.preventDefault();

        // Get form values
        const contactName = document.getElementById('name')?.value || '';
        const contactEmail = document.getElementById('email')?.value || '';
        const contactMessage = document.getElementById('message')?.value || '';

        const formData = {
            name: contactName,
            email: contactEmail,
            message: contactMessage,
            date: new Date().toISOString()
        };

        contactmessages.push(formData);

        console.log("Message saved:", formData);
        console.log("All messages:", contactmessages);

        alert("Thank you for your message! We will get back to you soon. Your message has been saved successfully.");

        contactForm.reset();
    });
});
