window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) {
        console.error("❌ .navbar not found!");
        return;
    }

    // Style the navbar directly
    Object.assign(navbar.style, {
        position: "relative",
        overflow: "hidden",
        zIndex: "1000",
    });

    // Inject style for animated gradient on navbar
    const style = document.createElement("style");
    style.innerHTML = `
      .navbar {
        background: linear-gradient(270deg, #1a1a2e, #2e2e4d, #5865f2, #a68cff, #d0bfff, #1a1a2e);
        background-size: 1000% 1000%;
        animation: navbarGradientShift 25s ease infinite;
      }

      @keyframes navbarGradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
});

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    if (!track || totalSlides === 0) {
        console.error("Slider elements not found");
        return;
    }

    window.nextSlide = function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // loop back to start
        }
        updateSlider();
    };

    window.prevSlide = function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // loop to end
        }
        updateSlider();
    };

    function updateSlider() {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});


