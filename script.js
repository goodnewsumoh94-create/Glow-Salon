// Get elements
const signupButton = document.querySelector('.signup'); // my existing signup button
const modal = document.getElementById('signupModal');
const closeBtn = document.querySelector('.modal .close');
const form = document.getElementById('signupForm');
const message = document.getElementById('message');

// Show modal on click
signupButton.addEventListener('click', (e) => {
  e.preventDefault(); // prevent default link behavior
  modal.style.display = 'flex';
});

// Close modal when × is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Form validation
form.addEventListener('submit', function(e){
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if(username && email && password.length >= 6){
    message.textContent = `Thank you, ${username}! You are signed up successfully.`;
    message.style.color = "#00ff00";
    form.reset();
    setTimeout(() => modal.style.display = 'none', 2000); // auto-close after 2s
  } else {
    message.textContent = "Please fill all fields correctly. Password must be at least 6 characters.";
    message.style.color = "red";
  }
});

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("open");
  });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('clicking'); // apply click animation
    setTimeout(() => {
      window.location.href = card.dataset.link; // redirect after animation
    }, 200); // 200ms delay for animation
  });
});

  AOS.init({
    duration: 1000,   // smooth speed
    easing: 'ease-in-out',
    once: true        // only animate once
  });

  

