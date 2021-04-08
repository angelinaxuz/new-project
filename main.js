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


// у меня есть пустой див slider1, есть 3 дива с содержимым слайдера

// 1. Функция, которая создать общий вид слайдера со всеми сложенностями:
//slider1 -> slider -> slider__inner -> slide (n число)
// 2. Функция, которая добавляет кнопки в слайдер
// 3. Функция, которая добавляет нужный id для слайдов
// 4. Функция, которая осуществляет работу слайдера


function createSlider() {
    let slider1 = document.querySelector("#slider1")
    let slider = document.createElement('div')
    slider.classList.add("slider")
    let sliderInner = document.createElement('div')
    sliderInner.classList.add("slider__inner")
    slider1.prepend(slider)
    slider.append(sliderInner)
    addSlide()
    addButtons()
    addDataId()
    flippingSlides()

}

function addSlide() {
    let elements = document.querySelectorAll(".aaa")
    let sliderInner = document.querySelector(".slider__inner")
    for (let i = 0; i < elements.length; i++) {
        let slide = document.createElement('div')
        slide.classList.add("slide")
        sliderInner.appendChild(slide)
        slide.appendChild(elements[i])

    }
}

function addButtons() {
    let slider = document.querySelector(".slider")
    let slideArrowLeft = document.createElement('button')
    slideArrowLeft.classList.add("slide-arrow", "slide-arrow_left")
    slider.prepend(slideArrowLeft)
    let slideArrowRight = document.createElement('button')
    slideArrowRight.classList.add("slide-arrow", "slide-arrow_right")
    slider.prepend(slideArrowRight)
}

function addDataId() {
    let slides = document.querySelectorAll(".slide")
    for (let i = 0; i < slides.length; i++) {
        slides[i].setAttribute('data-id', i)
    }
}

function flippingSlides() {
    let buttonLeft = document.querySelector(".slide-arrow_left")
    let buttonRight = document.querySelector(".slide-arrow_right")
    let slides = document.querySelectorAll('.slide')
    let currentIndex = 0

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
}

createSlider()
// let slideList = document.querySelector(".slide-list")
// while (slideList.childNodes.length > 0) {
//     sliderInner.appendChild(slideList.childNodes[0]);
// }
//
// console.log(sliderInner)








