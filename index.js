document.addEventListener("DOMContentLoaded", () => {
    const sideIcons = document.querySelectorAll(".side-icons");
    const contentSections = document.querySelectorAll(".content-section");
  
    sideIcons.forEach(icon => {
      icon.addEventListener("click", () => {
        // Remove active class from all content sections
        contentSections.forEach(section => {
          section.classList.remove("active");
        });
  
        // Get target section id
        const targetId = icon.getAttribute("data-target");
  
        // Add active class to the target content section
        document.getElementById(targetId).classList.add("active");
      });
    });
  });
  