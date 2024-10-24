//Тут тоже о чем говорили, swiper слишком общее название для файла и для переменной. Тем более, переменная сейчас лежит в глобальной области видимости

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
  breakpoints: {

    768: {
      slidesPerView: 1,
    },

    780: {
      slidesPerView: 3,
    },

    1025: {
      slidesPerView: 5,
    },
  },
});

