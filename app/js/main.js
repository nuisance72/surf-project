// const prevArrow = '<button><img class="slider-arrows slider-arrows-right" src="./image/header_arrow_pprew.svg" alt="стрелка"></button>';
// const nextArrow = '<button><img class="slider-arrows slider-arrows-left" src="./image/header_arrow.svg" alt="стрелка"></button>';
const prevArrow = '<img class="slider-arrows slider-arrows-right" src="./image/header_arrow_pprew.svg" alt="стрелка">';
const nextArrow = '<img class="slider-arrows slider-arrows-left" src="./image/header_arrow.svg" alt="стрелка">';

$(".header__slider").slick({
    infinite: true,
    fade: true,
    nextArrow,
    prevArrow,
    //дотсы в хедере
    dots: true,
    appendDots: '.slider-dots',
    customPaging: function(slider, i) {
        const slide = slider.$slides[i];
        const title = $(slide).find('.slider-item__info-title').text();
        return `<button type="button"><span class='slider-dots__number'>0${i + 1}</span><span>${title}</span></button>`;
    },
})

$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow,
    prevArrow,
    asNavFor: '.slider-map',
});


$('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
});