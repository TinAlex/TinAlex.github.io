let btn = document.querySelector('.header__nav-icon')
let line = document.querySelectorAll('.burger')
let nav = document.querySelector('.navigation__mobile')
let navLinks = document.querySelectorAll('.nav__panel__el-mobile')
navLinks.forEach(link=>{
	link.addEventListener('click', ()=>{
		nav.classList.toggle('navigation__mobile--active')
		line.forEach(function(element){
			element.classList.toggle('burger__line')
		  })
	})
})
btn.addEventListener('click',()=>{
	nav.classList.toggle('navigation__mobile--active')
	line.forEach(function(element){
		element.classList.toggle('burger__line')
	  })
})

// document.addEventListener( 'click', (e) => {
// 	if (nav.classList.contains('navigation__mobile--active')) {
// 		const withinBoundaries = e.composedPath().includes(nav);
// 		if ( ! withinBoundaries ) {
// 			console.log('lol')
// 			nav.classList.remove('navigation__mobile--active'); // скрываем элемент т к клик был за его пределами
// 		}
// 	}
	
// })


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
	autoplay: {
		delay: 10000,
		},
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
