function toggle() {
    var toggleBtn = document.getElementById("toggleBtn");
    var navbar = document.getElementById("navbar");
  
    // Toggle the text content of the button
    if (toggleBtn.textContent === "☰") {
      toggleBtn.textContent = "X";
    } else {
      toggleBtn.textContent = "☰";
    }
  
    // Toggle the visibility of the nav element
    if (navbar.style.display === "none" || navbar.style.display === "") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }
  