// Interactive features

// Get the modal element
var modal = document.getElementById("greeting-modal");

// Get the button element that closes the modal
var closeButton = document.getElementById("close-modal-btn");

// When the user opens the webpage, display the modal
window.onload = function() {
	modal.style.display = "flex";
};

// When the user clicks the close button, hide the modal
closeButton.onclick = function() {
	modal.style.display = "none";
};

document.addEventListener('DOMContentLoaded', function() {
    // First interaction - Change background color on click
    let colorBtn = document.querySelector('#colorBtn');
  
    // Interaction 1: Show/Hide project descriptions
    const projectDescriptions = document.querySelectorAll('.project-description');
    const projectButtons = document.querySelectorAll('.project-button');
  
    for (let i = 0; i < projectButtons.length; i++) {
      projectButtons[i].addEventListener('click', () => {
        if (projectDescriptions[i].classList.contains('d-none')) {
          projectDescriptions[i].classList.remove('d-none');
          projectButtons[i].textContent = 'Hide Description';
        } else {
          projectDescriptions[i].classList.add('d-none');
          projectButtons[i].textContent = 'View Description';
        }
      });
    }
  
    // Interaction 2: Change background color on button click
    const changeBackgroundButton = document.querySelector('#change-background');
    const body = document.querySelector('body');
  
    changeBackgroundButton.addEventListener('click', () => {
      body.style.backgroundColor = 'lightblue';
    });
  
    // Interaction 3: Toggle navbar collapse on mobile
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    navbarToggle.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });
  });
  