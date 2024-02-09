let btn = document.querySelector('.header__nav-icon')
let line = document.querySelectorAll('.burger')
let nav = document.querySelector('.navigation__mobile')
btn.addEventListener('click',()=>{
	nav.classList.toggle('navigation__mobile--active')
	line.forEach(function(element){
		element.classList.toggle('burger__line')
	  })
})


// const swiper = new Swiper('.swiper', {
// 	autoplay: {
// 		delay: 5000,
// 	  },
// 	// Optional parameters
// 	direction: 'horizontal',
// 	loop: true,
// 	slidesPerView: 1,

// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });


var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	centeredSlides: false,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
	  enabled: true,
	},
	breakpoints: {
	  769: {
		slidesPerView: 2,
		slidesPerGroup: 2,
	  },
	},
	scrollbar: {
	  el: ".swiper-scrollbar",
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });

// var swiper = new Swiper('.swiper', {
// 	slidesPerView: 1,
// 	spaceBetween: 30,
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  clickable: true,
// 	},
// 	breakpoints: {
// 	  768: {
// 		slidesPerView: 'auto',
// 		spaceBetween: 10
// 	  }
// 	},
// 		navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
//   });
