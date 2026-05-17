const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Get all images with the loading="lazy" attribute
function addLoadedClass(image) { // Function to add class to image parent after it is loaded
   const parentElement = image.parentElement;
   if (image.complete) { // Check if the image is loaded
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Add a load event to add the class after the image has loaded
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Loop through all the images and call the addLoadedClass function for each one

/* === */

/* Inside The Workshop -> */
const insideWorkshopSlider = document.querySelector('.inside-workshop__slider')
if (insideWorkshopSlider) {
   new Swiper(insideWorkshopSlider, {
      effect: 'slide',
      navigation: {
         nextEl: "#inside-workshop-btn-next",
         prevEl: "#inside-workshop-btn-prev",
      },
      slidesPerView: '1',
      loop: true,
      spaceBetween: 25,
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      breakpoints: {
         0: {
            slidesPerView: '1',
            spaceBetween: 25,
         },
         481: {
            slidesPerView: '2',
            spaceBetween: 35,
         },
         801: {
            slidesPerView: '3',
            spaceBetween: 35,
         },
         960: {
            slidesPerView: '3.6',
            spaceBetween: 30,
         },
         1201: {
            slidesPerView: '4.4',
            spaceBetween: 40,
         }
      },
   });
}
/* <- Inside The Workshop */

