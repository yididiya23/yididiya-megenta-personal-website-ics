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

function showSlide(index) {
    const sliderTrack = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    const translateX = -currentIndex * 100;
    sliderTrack.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

window.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);

    // 👇 Autoplay every 3 seconds
    setInterval(() => {
        nextSlide();
    }, 3000);
});
