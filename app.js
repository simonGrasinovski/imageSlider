const slides = document.querySelector('.slider').children;
const leftSlide = document.querySelector('.left');
const rightSlide = document.querySelector('.right');
const totalSlides = slides.length;
let index = 0;

rightSlide.addEventListener('click', () => {
    changeSlide('next');
});
leftSlide.addEventListener('click', () => {
    changeSlide('previous');
})

function changeSlide(direciton) {
    if(direciton === 'next') {
        index ++;
        if(index === totalSlides) {
            index = 0;
        } 
    } else {
        if(index === 0) {
            index = totalSlides;
        }
        index --;
    }
    for(let i = 0; i < slides.length; i ++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
    console.log(index);
}
