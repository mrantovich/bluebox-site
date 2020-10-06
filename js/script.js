$(document).ready(function(){

	$('.works__item').mouseenter(function(){
		$(this).find('span').addClass('_works-item-hovered');
		$(this).find('.works__link-container').addClass('_works-item-hovered');
	});
	$('.works__item').mouseleave(function(){
		$(this).find('span').removeClass('_works-item-hovered');
		$(this).find('.works__link-container').removeClass('_works-item-hovered');
	});

	$('.burger').click(function(){
		$(this).toggleClass('_active');
		$('.header__nav').toggleClass('_active');
	});

	$('.clients__slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				}
			},
			{
				breakpoint: 876,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 625,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
			]
	});
	$('.main__showcase-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('a[href*="#"]').smoothscroll({
		duration:  500
		});

});