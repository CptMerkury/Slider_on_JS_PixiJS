let position = 0;
const slideToShow = 1;
const slideToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const buttonPrev = document.querySelector('.slider-button-left')
const buttonNext = document.querySelector('.slider-button-right')
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length
const itemWidth = container.clientWidth / slideToShow;
const movePosition = slideToScroll * itemWidth

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
})

buttonNext.addEventListener('click', () => {
    console.log("clickNext")
    const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth
    position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth
    setPosition()
})
buttonPrev.addEventListener('click', () => {
    console.log("clickPrev")
    const itemsLeft = Math.abs(position) / itemWidth
    position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth
    setPosition()
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
    checkButton()
}

const checkButton = () => {
    buttonPrev.disabled = position === 0;
    buttonNext.disabled = position <= -(itemsCount - slideToShow) * itemWidth
}
checkButton()
