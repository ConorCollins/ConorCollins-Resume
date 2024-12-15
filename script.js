window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

const toggleButton = document.getElementById("toggleGradesButton");
const gradesSection = document.getElementById("grades");

toggleButton.addEventListener("click", function() {
  if (gradesSection.style.display === "none" || gradesSection.style.display === "") {
    gradesSection.style.display = "block"; 
    toggleButton.textContent = "Hide Grades"; 
  } else {
    gradesSection.style.display = "none";
    toggleButton.textContent = "View Grades";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-button");
  const experienceText = document.getElementById("experience-text");

  toggleButton.addEventListener("click", () => {
    experienceText.classList.toggle("show");
    if (experienceText.classList.contains("show")) {
      toggleButton.textContent = "Read Less";
    } else {
      toggleButton.textContent = "Read More";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-button-hobbies-achievements");
  const experienceText = document.getElementById("hobbies-achievements-text");

  toggleButton.addEventListener("click", () => {
    experienceText.classList.toggle("show");
    if (experienceText.classList.contains("show")) {
      toggleButton.textContent = "Read Less";
    } else {
      toggleButton.textContent = "Read More";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".expand-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const projectCard = button.closest(".project-card");
      const details = projectCard.querySelector(".project-details");

      details.classList.toggle("show");

      if (details.classList.contains("show")) {
        button.textContent = "Hide Details";
      } else {
        button.textContent = "View Details";
      }
    });
  });
});

//Formspree Contact Form
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  fetch(this.action, {
    method: this.method,
    body: new FormData(this),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("success-message").style.display = "block";
    } else {
      document.getElementById("error-message").style.display = "block";
    }
  })
  .catch(error => {
    document.getElementById("error-message").style.display = "block";
  });
});



