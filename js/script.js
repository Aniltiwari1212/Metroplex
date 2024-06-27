// Sticky-Header js //


$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.served-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:3
			}
		}
	});
	$('.srvcSlider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			1024:{
				margin:30,
				items:3
			}
		}
	});
});




// owl-carousel js
$(document).ready(function() {
var owl = $('.owl-carousel');
$('.clientSlide').owlCarousel({
	loop:true,
	autoplay:true,
	margin:25,
	nav:false,
	dots:true,
	responsive:{
		0:{
			items:1
		},
		768:{
			items:2
		},
		1024:{
			items:2
		}
	}
});
});



$(function(){
setTimeout("$('.loader').fadeOut('slow')", 500) 
})


AOS.init();




