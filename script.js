
document.addEventListener("DOMContentLoaded", () => {
    // Start time when the page loads
    const startTime = new Date().getTime();

    // Function to update the countdown
    function updateTimer() {
        const now = new Date().getTime();
        const elapsedTime = now - startTime;

        // Calculate time components
        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Update the HTML
        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    // Run the update function every second
    setInterval(updateTimer, 1000);
});



document.addEventListener("DOMContentLoaded", () => {
    // Check if there's a saved start time in local storage
    let startTime = localStorage.getItem("startTime");

    if (!startTime) {
        // If no start time exists, set it to the current time and save it
        startTime = new Date().getTime();
        localStorage.setItem("startTime", startTime);
    } else {
        // Parse the saved time (local storage stores everything as strings)
        startTime = parseInt(startTime, 10);
    }

    // Function to update the timer
    function updateTimer() {
        const now = new Date().getTime();
        const elapsedTime = now - startTime;

        // Calculate time components
        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Update the HTML
        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    // Immediately update the timer and run it every second
    updateTimer();
    setInterval(updateTimer, 1000);
});


   



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




    // category dropdown shows item when clicked

  document.querySelectorAll('.categories-list li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.categories-list li').forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});






    // Select all list items in the sidebar
    const categoryItems = document.querySelectorAll('.categories-list li');

    // Add click event to each list item
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all items
            categoryItems.forEach(i => i.classList.remove('active'));
            // Add 'active' class to the clicked item
            item.classList.add('active');
        });
    });

