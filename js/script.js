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
	});

});