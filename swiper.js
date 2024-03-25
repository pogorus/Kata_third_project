const breakpoint = window.matchMedia( '(min-width:768px)' );

let mySwiper;

const breakpointChecker = function() {
   if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      return;
   } else if ( breakpoint.matches === false ) {
      return enableSwiper();
   }
};

const enableSwiper = function() {
  mySwiper = new Swiper('.swiper', {
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1.25,
        spaceBetween: 16,
      },

      380: {
        slidesPerView: 1.50,
        spaceBetween: 16,
      },

      440: {
        slidesPerView: 1.75,
        spaceBetween: 16,
      },

      500: {
        slidesPerView: 2.00,
        spaceBetween: 16,
      },

      560: {
        slidesPerView: 2.25,
        spaceBetween: 16,
      },

      620: {
        slidesPerView: 2.50,
        spaceBetween: 16,
      },

      680: {
        slidesPerView: 2.75,
        spaceBetween: 16,
      },
    },

    effect: 'slider',

    pagination: {
      el: '.swiper-pagination',
    }
  });
};

breakpoint.addListener(breakpointChecker);

breakpointChecker();
