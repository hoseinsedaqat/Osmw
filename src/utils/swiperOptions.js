export const swiperOption = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 50,
        },
    },
}