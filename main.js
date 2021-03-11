let button = document.querySelector(".modal-btn")
let modalWindow = document.querySelector(".modal")
let overlay = document.querySelector(".modal__overlay")
let closeButton = document.querySelector(".modal__cross")

button.addEventListener("click", () => {
    modalWindow.classList.add("active")
    overlay.classList.add("active")
})

closeButton.addEventListener("click", () => {
    modalWindow.classList.remove("active")
    overlay.classList.remove("active")
})


let buttonLeft = document.querySelector(".slide-arrow_left")
let buttonRight = document.querySelector(".slide-arrow_right")


function getMoveValue(index,w){
    return (0-index)*w
}

function getNextSlideIndex(slideIndex) {
    return slideIndex + 1
}

function getSlideWidth (slideIndex) {
    let slide = document.querySelector(`.slide:nth-child(${slideIndex+1})`)
    return slide.clientWidth
}

function moveWrapper(x) {
    let slideWrapper = document.querySelector(".slider__inner")
    slideWrapper.style.transform = `translateX(${x}px)`
}

let currentSlideIndex = 1
buttonLeft.addEventListener("click", () => {
    let w = getSlideWidth(currentSlideIndex)
    let x = getMoveValue(currentSlideIndex, w)
    moveWrapper(x)
    currentSlideIndex = getNextSlideIndex(currentSlideIndex)
})


function getMoveReverseValue(index,w){
    return (0+index)*w
}
getMoveReverseValue(2)
debugger

function getPrevSlideIndex(slideIndex){
    return slideIndex - 1
}
getPrevSlideIndex(2)
debugger
function moveWrapperRight(y) {
    let slideWrapper = document.querySelector(".slider__inner")
    slideWrapper.style.transform = `translateX(${x}px)`
}

buttonRight.addEventListener("click", ()=> {
    let w = getSlideWidth(currentSlideIndex)
    let y = getMoveReverseValue(currentSlideIndex, w)
    moveWrapperRight(y)
    currentSlideIndex = getPrevSlideIndex(currentSlideIndex)
})


