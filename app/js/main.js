$(".header__slider").slick({
    infinite: true,
    fade: true,
    nextArrow: '<img class="slider-arrows slider-arrows-left" src="./image/header_arrow.svg" alt="стрелка">',
    prevArrow: '<img class="slider-arrows slider-arrows-right" src="./image/header_arrow_pprew.svg" alt="стрелка">',

    //дотсы в хедере
    dots: true,
    appendDots: '.slider-dots',
    customPaging: function(slider, i) {
        const slide = slider.$slides[i];
        const title = $(slide).find('.slider-item__info-title').text();
        return `<button type="button"><span class='slider-dots__number'>0${i + 1}</span><span>${title}</span></button>`;
    },
})

$('.serf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<img class="slider-arrows slider-arrows-left" src="./image/header_arrow.svg" alt="стрелка">',
    prevArrow: '<img class="slider-arrows slider-arrows-right" src="./image/header_arrow_pprew.svg" alt="стрелка">',
});