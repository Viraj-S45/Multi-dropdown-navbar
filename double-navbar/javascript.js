// Inside your javascript.js file
document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");

  toggleDropdowns.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent click event from reaching the document
      const dropdown = this.querySelector(".dropdown");
      toggleDropdowns.forEach((otherLink) => {
        if (otherLink !== link) {
          otherLink.querySelector(".dropdown").classList.remove("show-dropdown");
        }
      });
      dropdown.classList.toggle("show-dropdown");
    });
  });

  // Add event listener to close dropdown when clicking anywhere on the document
  document.addEventListener("click", function (event) {
    toggleDropdowns.forEach((link) => {
      const dropdown = link.querySelector(".dropdown");
      if (!link.contains(event.target) && dropdown.classList.contains("show-dropdown")) {
        dropdown.classList.remove("show-dropdown");
      }
    });
  });
});
