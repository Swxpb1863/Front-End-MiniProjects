const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-side')
const slideLeft = document.querySelector('.left-side')
const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const Length = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0;
slideLeft.style.top = `-${(Length - 1) *100}vh`;

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    console.log(sliderHeight)
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > Length-1){
            activeSlideIndex = 0;
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = Length-1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`;
}