let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto slide every 5 seconds (optional)
setInterval(() => {
    changeSlide(1);
}, 5000);
