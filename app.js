// ########### MODAL ############
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

// ########### NAVBAR ############
  // navbar collapse on mobile
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggle.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });
  