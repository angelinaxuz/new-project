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


// let buttonLeft = document.querySelector(".slide-arrow_left")
// let buttonRight = document.querySelector(".slide-arrow_right")
//
// let slides = document.querySelectorAll('.slide')
//
// function getSlideWidth(slideIndex) { //получили ширину слайда
//     let slide = document.querySelector(`.slide[data-id="${slideIndex}"`)
//     return slide.offsetWidth
// }
//
//
// function getWrapperMoveSize(index) {
//     let x = 0
//     for (let i = 0; i <= slides.length; i++) {
//         let w = getSlideWidth(i)
//         if (i < index) {
//             x -= w
//         } else {
//             break
//         }
//     }
//     return x
// }
//
// function moveWrapper(x) {
//     let slideWrapper = document.querySelector(".slider__inner")
//     slideWrapper.style.transform = `translateX(${x}px)`
// }
//
//
// let currentIndex = 0
//
// buttonLeft.addEventListener('click', () => {
//     if (currentIndex >= slides.length - 1) {
//         currentIndex = 0
//     } else
//         currentIndex = currentIndex + 1
//     let x = getWrapperMoveSize(currentIndex)
//     moveWrapper(x)
//
// })
//
//
// buttonRight.addEventListener('click', () => {
//     if (currentIndex === 0) {
//         currentIndex = slides.length - 1
//     } else
//         currentIndex = currentIndex - 1
//     let x = getWrapperMoveSize(currentIndex)
//     moveWrapper(x)
// })


function addDataId() {
    let slides = document.querySelectorAll(".slide")
    for (let i = 0; i < slides.length; i++) {
        slides[i].setAttribute('data-id', i)
    }
}

addDataId()

let buttonLeft = document.querySelector(".slide-arrow_left")
let buttonRight = document.querySelector(".slide-arrow_right")

let slides = document.querySelectorAll('.slide')

function getSlideWidth(slideIndex) { //получили ширину слайда
    let slide = document.querySelector(`.slide[data-id="${slideIndex}"`)
    return slide.offsetWidth
}

function getWrapperMoveSize(index) {
    let x = 0
    for (let i = 0; i <= slides.length; i++) {
        let w = getSlideWidth(i)
        if (i < index) {
            x -= w
        } else {
            break
        }
    }
    return x
}

function moveWrapper(x) {
    let slideWrapper = document.querySelector(".slider__inner")
    slideWrapper.style.transform = `translateX(${x}px)`
}


let currentIndex = 0

buttonLeft.addEventListener('click', function () {
    if (currentIndex >= 2) {
        this.style.backgroundColor = 'yellow'
    } else {
        currentIndex = currentIndex + 1
        let x = getWrapperMoveSize(currentIndex)
        moveWrapper(x)
    }

    if (currentIndex < 2) {
        buttonRight.style.backgroundColor = 'transparent'
    }
})


buttonRight.addEventListener('click', function () {
    if (currentIndex === 0) {
        this.style.backgroundColor = 'yellow'
    } else {
        currentIndex = currentIndex - 1
        let x = getWrapperMoveSize(currentIndex)
        moveWrapper(x)
    }

    if (currentIndex < 2) {
        buttonLeft.style.backgroundColor = 'transparent'
    }

})




