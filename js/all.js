const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed:1000,
  autoplay:{
    delay:5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  cssMode: true,
  speed:1000,
  slidesPerView: 2,
  breakpoints:{
    576:{
      slidesPerView:3
    },
    768:{
      slidesPerView:4
    },
    920:{
      slidesPerView:6
    },
    1200:{
      slidesPerView:8
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed:500,
  autoplay:{
    delay:3000
  },
  slidesPerView:2,
  breakpoints:{
    576:{
      slidesPerView:3
    },
    768:{
      slidesPerView:4
    },
    920:{
      slidesPerView:6
    },
    1200:{
      slidesPerView:8
    },
  },


  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
