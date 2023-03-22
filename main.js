
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("2", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });




//     <div class="swiper mySwiper">
//     <div class="swiper-wrapper">
//       <div class="swiper-slide">Slide 1</div>
//       <div class="swiper-slide">Slide 2</div>
//       <div class="swiper-slide">Slide 3</div>
//       <div class="swiper-slide">Slide 4</div>
//       <div class="swiper-slide">Slide 5</div>
//       <div class="swiper-slide">Slide 6</div>
//       <div class="swiper-slide">Slide 7</div>
//       <div class="swiper-slide">Slide 8</div>
//       <div class="swiper-slide">Slide 9</div>
//     </div>
//     <div class="swiper-button-next"></div>
//     <div class="swiper-button-prev"></div>
//     <div class="swiper-pagination"></div>
//     <div class="autoplay-progress">
//       <svg viewBox="0 0 48 48">
//         <circle cx="24" cy="24" r="20"></circle>
//       </svg>
//       <span></span>
//     </div>
//   </div>


var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}
                                              
                                           