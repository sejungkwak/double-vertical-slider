const down = document.getElementById('down');
const up = document.getElementById('up');
const texts = document.querySelectorAll('.text');
const images = document.querySelectorAll('.image');
const slides = document.querySelectorAll('.slide');

let activeSlide = 0;

down.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length -1;
    }
    setActiveSlide();

});

up.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length -1) {
        activeSlide = 0
    }

    setActiveSlide();
});

function setActiveSlide() {

    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');

}

