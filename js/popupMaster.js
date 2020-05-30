// JavaScript Document
$(document).on('ready', function(){


		$('.STdetail, .stimg ').click(function(){
			$('.full-detail').removeClass('full-detail-active');
		$('.staffmore').removeClass('staffmore-active');
			});
	  $('.staffmore').click(function(){
		  
		$('.full-detail').removeClass('full-detail-active');
		$('.staffmore').removeClass('staffmore-active');

		$(this).children('.full-detail').toggleClass('full-detail-active');
		$(this).toggleClass('staffmore-active');
		});
		
		
		
	$('.NEmore').click(function(){
		$(this).parent('.FACtxt').next('.NEmoreView').slideToggle();;
		});
	$('.FACI .container .FACblock:nth-child(odd)').addClass('FACblock-right');
	 $('.gallery .container .popup-gallery li').addClass('fadeDelay-2');
	
	
	$('.SPC, .staffHolder  ').addClass('fadeDelay-2');
	
	$('.tabs-nav a').on('click', function (event) {
    event.preventDefault();
    
    $('.tab-active').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage div').hide();
    $($(this).attr('href')).show();
});

			
jQuery('#camera_wrap_4').camera({
height: 'auto',
loader: 'bar',
pagination: true,
thumbnails: true,
hover: false,
opacityOnGrid: false,
imagePath: '../images/',
});
$('.flip-btm-right-left').append('<span class="flip flip-btm-left"></span><span class="flip flip-btm-right"></span>');
$('.center-top-clip').append('<span class="clip"><i></i></span>');
$('.clip-Double').append('<span class="clip"><i class="clip-left"></i><i class="clip-right"></i></span>');
});




		
