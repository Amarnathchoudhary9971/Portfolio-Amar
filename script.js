document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Typing effect
  const typingElement = document.getElementById("typing");
  const words = [
    "Full Stack Developer",
    "React & Node.js Expert",
    "Frontend Engineer",
    "Backend API Builder",
    "MERN Stack Developer",
    "Open Source Contributor",
  ];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let currentWord = words[wordIndex];

  function type() {
    const typed = isDeleting
      ? currentWord.substring(0, letterIndex - 1)
      : currentWord.substring(0, letterIndex + 1);
    typingElement.textContent = typed;
    letterIndex = isDeleting ? letterIndex - 1 : letterIndex + 1;

    let delay = isDeleting ? 100 : 200;

    if (!isDeleting && typed === currentWord) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && typed === "") {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      currentWord = words[wordIndex];
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
});
