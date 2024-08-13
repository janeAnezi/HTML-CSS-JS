let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
};

const nextSlide = () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
};

const prevSlide = () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
};

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 4000); // Auto-slide every 3 seconds
