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
      if (window.innerWidth >= 1440) {
        if (swiper.activeIndex === 4) {
          swiper.allowSlideNext = false;
          document
            .querySelector('.next-img-btn')
            .classList.add('swiper-button-disabled');
        } else {
          swiper.allowSlideNext = true;
          document
            .querySelector('.next-img-btn')
            .classList.remove('swiper-button-disabled');
        }
      }
      changeBullet(swiper);
    },
  },
  navigation: {
    prevEl: '.prev-img-btn',
    nextEl: '.next-img-btn',
  },
});

function changeBullet(swiper) {
  const paginationBulletClass = document.querySelector(
    '.gallery-pagination-bullet'
  ).classList;

  if (swiper.activeIndex === 0) {
    paginationBulletClass.remove('last-slide-active', 'slide-active');
  } else if (
    (window.innerWidth < 1440 &&
      swiper.activeIndex === swiper.slides.length - 1) ||
    (window.innerWidth >= 1440 && swiper.activeIndex === 4)
  ) {
    paginationBulletClass.add('last-slide-active');
    paginationBulletClass.remove('slide-active');
  } else {
    paginationBulletClass.add('slide-active');
    paginationBulletClass.remove('next-slide-active');
  }
}
