function animateCounter(element, targetValue, duration) {
    let startValue = 0;
    const increment = targetValue / (duration / 10); 
    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= targetValue) {
        element.textContent = targetValue; 
        clearInterval(interval); 
      } else {
        element.textContent = Math.floor(startValue); 
      }
    }, 10); 
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target.querySelector(".htmega-counter-number");
          const targetValue = parseInt(counter.dataset.toValue, 10);
          animateCounter(counter, targetValue, 2000); 
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.5 } 
  );

  document.querySelectorAll(".htmega-counter-content").forEach((content) => {
    observer.observe(content);
  });

const animatedText = document.getElementById("animated-text");
const words = ["You're Solution"];
let wordIndex = 0; 
let letterIndex = 0; 
let isDeleting = false; 

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting && letterIndex <= currentWord.length) {
    animatedText.textContent = currentWord.slice(0, letterIndex); 
    letterIndex++; 
    setTimeout(typeEffect, 150); 
  } else if (isDeleting && letterIndex > 0) {
    animatedText.textContent = currentWord.slice(0, letterIndex); 
    letterIndex--; 
    setTimeout(typeEffect, 150); 
  } else {
    isDeleting = !isDeleting;

    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length; 
     }

    setTimeout(typeEffect, 500); 
  }
}
typeEffect();
typeEffect();
//scrool animation 

document.getElementById('learn-more-btn').addEventListener('click', function () {
  document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
});

// document.getElementById('steps').addEventListener('click', function () {
//   document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
// });


// document.getElementById('get-started').addEventListener('click', function () {
//   document.getElementById("pricing").scrollIntoView({ behavior: 'smooth' });
// });

document.getElementById('about-us').addEventListener('click', function () {
  document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
});

//navbar
document.getElementById("nav-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  // Ensure the first item is always open
  const firstItem = faqItems[0];
  const firstAnswer = firstItem.querySelector(".faq-answer");
  firstItem.classList.add("open");
  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close all FAQ items except the one being clicked
      faqItems.forEach((faq, i) => {
        if (i !== index) {
          const answer = faq.querySelector(".faq-answer");
          faq.classList.remove("open");
          answer.style.maxHeight = null; // Reset height
        }
      });

      // Toggle the current FAQ item
      if (isOpen) {
        item.classList.remove("open");
        answer.style.maxHeight = null; // Reset height if it's already open
      } else {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px"; // Set height dynamically
      }
    });
  });
});

window.onload = function () {
  const container = document.querySelector(".services-container");
  container.scrollTo({
    left: container.scrollWidth / 2,
    behavior: "smooth",
  });
};
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".services-container");
  let scrollAmount = 0;
  let step = 300; // Adjust scroll speed
  let interval = 2000; // 2 seconds delay before scrolling

  function autoScroll() {
    if (scrollAmount < container.scrollWidth - container.clientWidth) {
      scrollAmount += step;
    } else {
      scrollAmount = 0; // Reset scroll to start
    }
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  setInterval(autoScroll, interval);
});



const contactBtn = document.getElementById("contact-btn");
const contactMenu = document.getElementById("contact-menu");

contactBtn.addEventListener("click", () => {
    if (contactMenu.style.display === "flex") {
        contactMenu.style.opacity = "0";
        setTimeout(() => contactMenu.style.display = "none", 300);
    } else {
        contactMenu.style.display = "flex";
        setTimeout(() => contactMenu.style.opacity = "1", 10);
    }
});

// Hide menu when clicking outside
document.addEventListener("click", (event) => {
    if (!contactBtn.contains(event.target) && !contactMenu.contains(event.target)) {
        contactMenu.style.opacity = "0";
        setTimeout(() => contactMenu.style.display = "none", 300);
    }
});
