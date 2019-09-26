"use strict"

$(document).ready(function(){
  $('.owl-one').owlCarousel({
    autoplay:true,
    loop:true,
    margin:0,
    responsiveRefreshRate:800,
    dots: false,
    nav: false,
   
    responsive:{
        0:{
            items:1
        }
    }
  })
 
  $('.owl-two').owlCarousel({
    autoplay:true,
    loop:true,
    margin:0,
    responsiveRefreshRate:800,
    dots: true,
    nav: false,
   
    responsive:{
        0:{
            items:1
        }
    }
  })

   $('.owl-three').owlCarousel({
    autoplay:true,
    loop:true,
    margin:0,
    responsiveRefreshRate:800,
    dots: false,
    nav: false,
   
    responsive:{
        0:{
            items:1
        }
    }
  })
  

});

$('[data-fancybox="image-gallery"]').fancybox({
	// Options will go here
});

var elem = $('.welcome_menu');
var doc = $(document);
function scrolled() {
   var threshold = doc.scrollTop() > 50;
   elem.toggleClass('scrolled', threshold);
   }
$(window).on({ scroll: scrolled });



let burger = document.querySelector('.burger');

burger.addEventListener("click",function(){
  let menu = document.querySelector('.main-nav'); 
  menu.classList.toggle("show"); 
});