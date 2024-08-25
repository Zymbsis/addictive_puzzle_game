import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.review-swiper', {
  direction: 'horizontal',
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 1,
  spaceBetween: 34,
  speed: 400,
  breakpoints: {
    1440: {
      initialSlide: 2,
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
  on: {
    slideChange: swiper => {
      swiper.slides[swiper.realIndex + 1]?.nextElementSibling?.classList.add(
        'right-rotate'
      );
      swiper.slides[
        swiper.realIndex - 1
      ]?.previousElementSibling?.classList.add('left-rotate');
      swiper.slides[swiper.realIndex].classList.remove(
        'right-rotate',
        'left-rotate'
      );
      changeBullet(swiper);
    },
    init: swiper => {
      swiper.slides[swiper.realIndex + 1]?.nextElementSibling?.classList.add(
        'right-rotate'
      );
    },
  },
  navigation: {
    prevEl: '.prev-review',
    nextEl: '.next-review',
  },
});

function changeBullet(swiper) {
  const paginationBulletClass =
    document.querySelector('.pagination-bullet').classList;
  if (swiper.activeIndex === 0) {
    paginationBulletClass.remove('last-slide-active', 'slide-active');
  } else if (swiper.activeIndex === swiper.slides.length - 1) {
    paginationBulletClass.add('last-slide-active');
    paginationBulletClass.remove('slide-active');
  } else {
    paginationBulletClass.add('slide-active');
    paginationBulletClass.remove('next-slide-active');
  }
}
