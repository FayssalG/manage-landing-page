const testimonials = document.querySelector('.testimonials-container')
const nav = document.querySelector('nav')
const hamburger = document.querySelector('.hamburger-menu')

const slider = new A11YSlider(testimonials , {

  autoplay: true,
  autoplaySpeed: 4000,
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    800: {
      dots: false, // dots enabled 1280px and up
    },
  },
})

hamburger.addEventListener('click' , ()=>{
  if (nav.classList.contains('nav-active')) {
    nav.classList.remove('nav-active')
      
  }
  else{
    nav.classList.add('nav-active')
  }
  
})


document.querySelector('main').addEventListener('click' , ()=>{
  nav.classList.remove('nav-active')

})