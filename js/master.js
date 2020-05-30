// JavaScript Document
$(document).on('ready', function(){
  
jQuery('#camera_wrap_4').camera({
height: 'auto',
loader: '',
pagination: true,
thumbnails: true,
hover: false,
opacityOnGrid: false,
imagePath: '../images/',
});

$("#owl-demo").owlCarousel({

navigation : true,
slideSpeed : 300,
paginationSpeed : 400,
singleItem : true,
autoPlay: 6000,
transitionStyle : "fadeUp"

// "singleItem:true" is a shortcut for:
// items : 1, 
// itemsDesktop : false,
// itemsDesktopSmall : false,
// itemsTablet: false,
// itemsMobile : false

});

$("#owl-demo-testimonials").owlCarousel({

navigation : true,
slideSpeed : 300,
paginationSpeed : 400,
singleItem : true,
autoPlay: 3500,
transitionStyle : "goDown"
// "singleItem:true" is a shortcut for:
// items : 1, 
// itemsDesktop : false,
// itemsDesktopSmall : false,
// itemsTablet: false,
// itemsMobile : false

});

//news and read more section script start

$("#owl-demo-news").owlCarousel({

autoplay:true,
items : 4,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3]

});


$("#owl-demo-recruiters").owlCarousel({
autoPlay: 3000,
items : 6,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3]
});
	
});

		
