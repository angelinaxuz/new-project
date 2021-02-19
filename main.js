// let slides = document.querySelectorAll(".slide")
// let buttons = document.querySelectorAll('.slide-btn')
//
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", () => {
//         for (let x = 0; x < slides.length; x++) {
//             slides[x].classList.remove("active")
//         }
//         slides[i].classList.add("active")
//     })
// }

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
let buttonsId = 1
let buttons = document.querySelector(`.slide-btn[data-id="${buttonsId}"]`)
buttonLeft.addEventListener("click", () => {


    let nextSlideId = currentSlideId + 1
    if (nextSlideId > document.querySelectorAll(`.slide2`).length) {
        nextSlideId = 1
    }
    console.log(nextSlideId)

    let currentSlide = document.querySelector(`.slide2[data-id="${currentSlideId}"]`)
    currentSlide.classList.add("to-left")
    currentSlide.classList.remove("from-right")


    let nextSlide = document.querySelector(`.slide2[data-id="${nextSlideId}"]`)
    nextSlide.classList.add("from-right")

    currentSlideId = nextSlideId

    currentSlide.classList.remove("from-left","to-right")
    nextSlide.classList.remove("from-left","to-right")


    if (currentSlide.length === buttons.length) {
    for (let i = currentSlide.length - 1; i >= 0; i--) {
    currentSlide[i].id = buttons[i].id;
  }
}

})

buttonRight.addEventListener("click", () => {

    let nextSlideId = currentSlideId + 1
    if (nextSlideId > document.querySelectorAll(`.slide2`).length) {
        nextSlideId = 1
    }
    console.log(nextSlideId)

    let currentSlide = document.querySelector(`.slide2[data-id="${currentSlideId}"]`)

    currentSlide.classList.add("from-left")
    currentSlide.classList.remove("from-left")
    currentSlide.classList.add("to-right")

    let nextSlide = document.querySelector(`.slide2[data-id="${nextSlideId}"]`)
    nextSlide.classList.add("from-left")

    currentSlideId = nextSlideId




})
// когда кликаешь на стрелку id текущего слайда должно совпасть с id нужной кнопки
//
// currentSlide data-id
// slide-btn data-id






















