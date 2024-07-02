 // TESTIMONIAL SLIDER ONE
          var swiper = new Swiper(".testimonial__slider--first", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed:1000,
            loop:true,
            pagination: {
             el: '.rts-dot__button',
             clickable: true,
          },
            breakpoints: {
              1200: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView:3,
              },
              768: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              }
            },
          });

          // TESTIMONIAL SLIDER TWO
          var swiper = new Swiper(".testimonial-slider-two", {
            slidesPerView: 1.7,
            spaceBetween: 30,
            speed:1000,
            loop:true,
            centeredSlides: true,
            scrollbar: {
              el: ".rts-swiper-scrollbar",
              hide: false,
              draggable: true,
              dragSize: 350,
            },
            navigation: {
              nextEl: ".rts-next",
              prevEl: ".rts-prev",
          },
            breakpoints: {
              1200: {
                slidesPerView: 1.7,
              },
              900: {
                slidesPerView:2,
              },
              768: {
                slidesPerView: 2,
              },
              580: {
                slidesPerView: 1.5,
              },
              0: {
                slidesPerView: 1,
                scrollbar:{
                  hide: true,
                }
              }
            },
          });

          // TESTIMONIAL SLIDER THREE
          var swiper = new Swiper(".testimonial__slider--three", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed:1000,
            centeredSlides: true,
            loop:true,
            pagination: {
             el: '.swiper-pagination',
             clickable: true,
          },
            breakpoints: {
              1200: {
                slidesPerView: 3,
              },
              900: {
                slidesPerView:3,
              },
              768: {
                slidesPerView: 2,
              },
              580: {
                slidesPerView: 1.5,
              },
              0: {
                slidesPerView: 1,
              }
            },
          }); 
          // TESTIMONIAL SLIDER FOUR
          var swiper = new Swiper(".testimonial__slider--four", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed:1500,
            loop:true,
            pagination: {
             el: '.swiper-pagination',
             clickable: true,
          },
            navigation: {
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            },
            breakpoints: {
              1200: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView:1,
              },
              768: {
                slidesPerView: 1,
              },
              580: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              }
            },
          });