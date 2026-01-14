document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-toggle");
  if (!toggle) return;

  // Function to update the emoji based on current mode
  const updateIcon = () => {
    if (document.body.classList.contains("dark")) {
      toggle.textContent = "☀️";
    } else {
      toggle.textContent = "🌙";
    }
  };

  // Check localStorage on load
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
  }
  
  // Set initial icon
  updateIcon();

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
    
    // Update icon after toggle
    updateIcon();
  });
});
