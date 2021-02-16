let slides = document.querySelectorAll(".slide")
let buttons = document.querySelectorAll('.slide-btn')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        for (let x = 0; x < slides.length; x++) {
            slides[x].classList.remove("active")
        }
        slides[i].classList.add("active")
    })
}

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
let currentSlideId = 1
buttonLeft.addEventListener("click", () => {
    let currentSlide = document.querySelector(`.slide2[data-id="${currentSlideId}"]`)
    let nextSlide = document.querySelector(`.slide2[data-id="${currentSlideId+1}"]`)
    currentSlide.classList.add("to-left")
    currentSlide.classList.remove("from-right")
    nextSlide.classList.add("from-right")
    currentSlideId = currentSlideId + 1
})
















