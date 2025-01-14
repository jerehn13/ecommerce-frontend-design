




// english dropdown at the bottom
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".language-dropdown");
    const button = dropdown.querySelector(".dropdown-button");

    button.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent clicks from bubbling
      dropdown.classList.toggle("active");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", () => {
      dropdown.classList.remove("active");
    });
  });














