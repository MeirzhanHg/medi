let slideIndex = 1;
let offset = 0;

const slides = document.querySelectorAll('.main-block__slide'),
    prev = document.querySelector('.arrow__prev'),
    next = document.querySelector('.arrow__next'),
    slidesWrapper = document.querySelector('.main-block__wrapper'),
    slidesField = document.querySelector('.main-block__inner'),
    width = window.getComputedStyle(slidesWrapper).width,
    tabs = document.querySelectorAll('.main-block__tab')

slidesField.style.width = 100 * slides.length + "%";

slides.forEach(slide => {
    slide.style.width = width;
})

tabs[slideIndex - 1].style.backgroundColor = '#4FBFA5'

function slideActive(index) {
    tabs.forEach(tab => tab.style.backgroundColor = '#00868A');
    tabs[index - 1].style.backgroundColor = '#4FBFA5'
}

function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
}

next.addEventListener('click', function () {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
        offset = 0
    } else {
        offset += deleteNotDigits(width)
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1
    } else {
        slideIndex++
    }

    slideActive(slideIndex);
});

prev.addEventListener('click', function () {
    if (offset == 0) {
        offset = deleteNotDigits(width) * (slides.length - 1)
    } else {
        offset -= deleteNotDigits(width)
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length
    } else {
        slideIndex--
    }

    slideActive(slideIndex);
});

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to')

        slideIndex = slideTo;

        offset = deleteNotDigits(width) * (slideTo - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;

        slideActive(slideIndex);
    })
})

// showSlides(slideIndex);

// function showSlides(n) {
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     // Как ваша самостоятельная работа - переписать на использование классов show/hide

//     slides.forEach((item) => {
//         item.classList.remove('show')
//         item.classList.add('hide')
//     })

//     slides[slideIndex - 1].classList.remove('hide')
//     slides[slideIndex - 1].classList.add('show')
// }

// function plusSlides (n) {
//     showSlides(slideIndex += n);
// }

// TABS

// tabs('.tabheader__item', '.tabcontent', '.tabheader__items', "tabheader__item_active");

const tabes = document.querySelectorAll('.tab__item'),
    tabsContent = document.querySelectorAll('.tab__content'),
    tabsParent = document.querySelector('.tab__items');

function hideTabContent() {
    tabsContent.forEach(item => {
        item.style.display = "none";
    });

    tabes.forEach(item => {
        item.classList.remove('tab__item-active');
    });
}

function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabes[i].classList.add('tab__item-active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains('tab__item')) {
        tabes.forEach((item, i) => {
            console.log(item);
            console.log(i);
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

const items = document.querySelectorAll('.menu__item');

items.forEach((item, i) => {
    item.addEventListener('click', () => {
        isActive(i)
    })
})

function notActive() {
    items.forEach(item => item.classList.remove('active-clas'))
}

function isActive(i) {
    notActive()
    items[i].classList.add('active-clas')
}