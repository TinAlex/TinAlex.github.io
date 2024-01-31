// let slides = document.getElementsByClassName("slider__slide");
// let navlinks = document.getElementsByClassName("slider__navlink");
// let currentSlide = 0;

// document.getElementById("nav-button--next").addEventListener("click", () => {
//     changeSlide(currentSlide + 1)
// });
// document.getElementById("nav-button--prev").addEventListener("click", () => {
//     changeSlide(currentSlide - 1)
// });

// function changeSlide(moveTo) {
//     if (moveTo >= slides.length) {moveTo = 0;}
//     if (moveTo < 0) {moveTo = slides.length - 1;}
    
//     slides[currentSlide].classList.toggle("active");
//     navlinks[currentSlide].classList.toggle("active");
//     slides[moveTo].classList.toggle("active");
//     navlinks[moveTo].classList.toggle("active");
    
//     currentSlide = moveTo;
// }

// document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
//     bullet.addEventListener('click', () => {
//         if (currentSlide !== bulletIndex) {
//             changeSlide(bulletIndex);
//         }
//     })
// })
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView:1,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });