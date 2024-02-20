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
	  0: {
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
