document.getElementById('mobile-menu').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const newTransformValue = -100 * currentSlide + '%';
    document.querySelector('.carousel-container').style.transform = `translateX(${newTransformValue})`;
}
