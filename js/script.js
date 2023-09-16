const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,

    effect: 'flip',

    flipEffect: {
        slideShadows: true,
        limitRotation: true
    },
});