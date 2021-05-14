// let button = document.querySelector(".modal-btn")
// let modalWindow = document.querySelector(".modal")
// let overlay = document.querySelector(".modal__overlay")
// let closeButton = document.querySelector(".modal__cross")
//
// button.addEventListener("click", () => {
//     modalWindow.classList.add("active")
//     overlay.classList.add("active")
// })
//
// closeButton.addEventListener("click", () => {
//     modalWindow.classList.remove("active")
//     overlay.classList.remove("active")
// })
//
//
// let buttonLeft = document.querySelector(".slide-arrow_left")
// let buttonRight = document.querySelector(".slide-arrow_right")
// let currentSlideId = 1
// slideToLeft(1)
//
// function slideToLeft(nextSlideId) {
//     clear()
//     let currentSlide = document.querySelector(`.slide2[data-id="${currentSlideId}"]`)
//     currentSlide.classList.add("to-left")
//     currentSlide.classList.remove("from-right")
//     let nextSlide = document.querySelector(`.slide2[data-id="${nextSlideId}"]`)
//     nextSlide.classList.add("from-right")
//     currentSlideId = nextSlideId
// }
//
// function slideToRight(nextSlideId) {
//     clear()
//     let currentSlide = document.querySelector(`.slide2[data-id="${currentSlideId}"]`)
//     currentSlide.classList.add("from-left")
//     currentSlide.classList.remove("from-left")
//     currentSlide.classList.add("to-right")
//     let nextSlide = document.querySelector(`.slide2[data-id="${nextSlideId}"]`)
//     nextSlide.classList.add("from-left")
//     currentSlideId = nextSlideId
// }
//
// function clear() {
//     let slides = document.querySelectorAll(`.slide2`)
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("from-left", 'from-right', 'to-left', 'to-right')
//     }
// }
//
//
// buttonLeft.addEventListener("click", () => {
//     let nextSlideId = currentSlideId + 1
//     if (nextSlideId > document.querySelectorAll(`.slide2`).length) {
//         nextSlideId = 1
//     }
//     slideToLeft(nextSlideId)
// })
//
// buttonRight.addEventListener("click", () => {
//     let nextSlideId = currentSlideId - 1
//     if (nextSlideId === 0) {
//         nextSlideId = document.querySelectorAll(`.slide2`).length - 1
//     }
//     slideToRight(nextSlideId)
// })
//
// let btns = document.querySelectorAll(".slide-btn")
//
//
// for (let i = 0; i < btns.length; i++) {
//
//     btns[i].addEventListener("click", () => {
//
//         let nextSlideId = btns[i].getAttribute("data-id")
//         for (let x = 0; x < btns.length; x++) {
//             btns[x].classList.remove("active")
//         }
//         btns[i].classList.add("active")
//
//         if (currentSlideId > nextSlideId) {
//             slideToRight(nextSlideId)
//         } else if (nextSlideId > currentSlideId) {
//             slideToLeft(nextSlideId)
//         }
//     })
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
