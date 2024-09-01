// script.js

// Add event listener to the button in the hero section
document.querySelector('button').addEventListener('click', () => {
    alert('Learn more about our community and services!');
});

// Add event listener to the form in the contact section
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    alert(`Thank you, ${name}! We'll be in touch with you soon.`);
});