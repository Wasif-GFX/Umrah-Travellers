// Navbar
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

if (menuBtn) {
  menuBtn.onclick = () => {
    navbar.classList.toggle("active");
  };
}

// Slider
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
};

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
}

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Brand Slider
let currentIndex = 0;
const totalImages = 10;
const imagesToShow = 4;
const brandContainer = document.querySelector(".brand_container");

if (brandContainer) {
  function moveSlider() {
    currentIndex += 1;
    if (currentIndex > totalImages - imagesToShow) {
      currentIndex = 0;
    }
    const offset = -(currentIndex * (100 / imagesToShow));
    brandContainer.style.transform = `translateX(${offset}%)`;
  }
  setInterval(moveSlider, 3000);
}

// Section 3
document.querySelectorAll(".story-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});

// One-Time Timer Modal
const closeOneTime = document.getElementById("oneTIme");
function oneTimeTimer() {
  if (closeOneTime) {
    closeOneTime.className = "oneTime";
  }
}
setTimeout(oneTimeTimer, 6000);

document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const inquiry = document.getElementById("inquiry").value;
    const submitButton = event.target.querySelector("button");

    if (!name) alert("Please enter your name.");
    else if (!email) alert("Please enter your email.");
    else if (!contact) alert("Please enter your contact number.");
    else if (!inquiry) alert("Please select an inquiry type.");
    else {
      submitButton.innerText = "Submitting...";
      submitButton.disabled = true;

      setTimeout(() => {
        submitButton.innerText = "Submit";
        submitButton.disabled = false;
        alert("Form submitted successfully!");
        event.target.reset();
      }, 2000);
    }
  });

// Close Button for One-Time Modal
document.getElementById("closeButton")?.addEventListener("click", function () {
  if (closeOneTime) {
    closeOneTime.className = "oneTimeHidden";
  }
});

// Scroll to Top Function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide Scroll to Top Button
function toggleBackTopButton() {
  const backTopButton = document.getElementById("backTopButton");
  if (backTopButton) {
    backTopButton.style.display = window.scrollY > 200 ? "flex" : "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  toggleBackTopButton();
  window.addEventListener("scroll", toggleBackTopButton);
});

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
  });
});
