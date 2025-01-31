// script.js

// Function to toggle the menu visibility
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
}

// Function to toggle the rotation class on the logo image
function toggleRotation() {
    const logo = document.querySelector('.logo'); 
    logo.classList.toggle('rotate');
}

// Ensure the function is called when the image is clicked
document.querySelector('.logo').addEventListener('click', toggleRotation);
