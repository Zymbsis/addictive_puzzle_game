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
      changeRotate(swiper);
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

function changeRotate(swiper) {
  swiper.slides[swiper.realIndex + 1]?.nextElementSibling?.classList.add(
    'right-rotate'
  );
  swiper.slides[swiper.realIndex - 1]?.previousElementSibling?.classList.add(
    'left-rotate'
  );
  swiper.slides[swiper.realIndex].classList.remove(
    'right-rotate',
    'left-rotate'
  );
}

function changeBullet(swiper) {
  const bulletClassList = document.querySelector(
    '.review-pagination-bullet'
  ).classList;
  if (swiper.activeIndex === 0) {
    bulletClassList.remove('last-slide-active', 'slide-active');
  } else if (swiper.activeIndex === swiper.slides.length - 1) {
    bulletClassList.add('last-slide-active');
    bulletClassList.remove('slide-active');
  } else {
    bulletClassList.add('slide-active');
    bulletClassList.remove('next-slide-active');
  }
}
