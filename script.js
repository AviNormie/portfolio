 // Theme toggle functionality
 const themeToggle = document.getElementById('theme-toggle');
 const body = document.body;


 themeToggle.addEventListener('click', () => {
     body.classList.toggle('light-mode');
     if (body.classList.contains('light-mode')) {
         document.documentElement.style.setProperty('--bg-color', '#ffffff');
         document.documentElement.style.setProperty('--text-color', '#121212');
         document.documentElement.style.setProperty('--accent-color', '#e0e0e0');
         document.documentElement.style.setProperty('--secondary-color', '#f0f0f0');
         themeToggle.textContent = '🌙';
     } else {
         document.documentElement.style.setProperty('--bg-color', '#121212');
         document.documentElement.style.setProperty('--text-color', '#ffffff');
         document.documentElement.style.setProperty('--accent-color', '#333333');
         document.documentElement.style.setProperty('--secondary-color', '#4a4a4a');
         themeToggle.textContent = '☀️';
     }
 });


 // Live form validation
 const contactForm = document.getElementById('contact-form');
 const nameInput = document.getElementById('name');
 const emailInput = document.getElementById('email');
 const messageInput = document.getElementById('message');


 function validateInput(input, regex, errorMessage) {
     if (!regex.test(input.value)) {
         input.setCustomValidity(errorMessage);
     } else {
         input.setCustomValidity('');
     }
 }


 nameInput.addEventListener('input', () => {
     validateInput(nameInput, /^[a-zA-Z\s]{2,}$/, 'Please enter a valid name (at least 2 characters, letters only)');
 });


 emailInput.addEventListener('input', () => {
     validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address');
 });


 messageInput.addEventListener('input', () => {
     validateInput(messageInput, /^.{10,}$/, 'Please enter a message (at least 10 characters)');
 });


 // Animation on click
 document.addEventListener('click', (e) => {
     const animationContainer = document.querySelector('.animation-container');
     const randomColor = Math.floor(Math.random()*16777215).toString(16);
     
     const circle = document.createElement('div');
     circle.style.position = 'absolute';
     circle.style.borderRadius = '50%';
     circle.style.pointerEvents = 'none';
     circle.style.width = '5px';
     circle.style.height = '5px';
     circle.style.backgroundColor = `#${randomColor}`;
     circle.style.left = `${e.clientX}px`;
     circle.style.top = `${e.clientY}px`;
     
     animationContainer})

