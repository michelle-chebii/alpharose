document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display success message
    const formResponse = document.getElementById('formResponse');
    formResponse.textContent = 'Message sent successfully!';
    formResponse.style.color = 'green';

    // Clear the form fields
    document.getElementById('contactForm').reset();
});
