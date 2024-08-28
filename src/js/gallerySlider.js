import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.gallery-swiper', {
  direction: 'horizontal',
  centeredSlides: true,
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 400,
  breakpoints: {
    1440: {
      centeredSlides: false,
      initialSlide: 0,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 56,
    },
  },
  on: {
    slideChange: swiper => {
      navButtonToggleDisable(swiper);
      changeBullet(swiper);
    },
  },
  navigation: {
    prevEl: '.prev-img-btn',
    nextEl: '.next-img-btn',
  },
});

function navButtonToggleDisable(swiper) {
  const navButtonClassList = document.querySelector('.next-img-btn').classList;

  if (window.innerWidth >= 1440) {
    if (swiper.activeIndex === 4) {
      swiper.allowSlideNext = false;
      navButtonClassList.add('swiper-button-disabled');
    } else {
      swiper.allowSlideNext = true;
      navButtonClassList.remove('swiper-button-disabled');
    }
  }
}

function changeBullet(swiper) {
  const bulletClassList = document.querySelector(
    '.gallery-pagination-bullet'
  ).classList;
  if (swiper.activeIndex === 0) {
    bulletClassList.remove('last-slide-active', 'slide-active');
  } else if (
    (window.innerWidth < 1440 &&
      swiper.activeIndex === swiper.slides.length - 1) ||
    (window.innerWidth >= 1440 && swiper.activeIndex === 4)
  ) {
    bulletClassList.add('last-slide-active');
    bulletClassList.remove('slide-active');
  } else {
    bulletClassList.add('slide-active');
    bulletClassList.remove('next-slide-active');
  }
}
