$(function(){
	$('.bars').click(function(){
		$('.head').animate({width: 'toggle'},'100');
		$('.bars span').addClass('fa-spin');
		$('.bars').fadeOut(100);
		$('.times').fadeIn(100);
		$('.times span').removeClass('fa-spin');
	});
	$('.times').click(function(){
		$('.head').animate({width: 'toggle'},'100');
		$('.times span').addClass('fa-spin');
		$('.times').fadeOut(100);
		$('.bars').fadeIn(100);
		$('.bars span').removeClass('fa-spin');
	});
	$('.faqs').click(function(){
		if($(this).find('.answer').hasClass('open')){
			$(this).find('.answer').removeClass('open');
			$(this).find('.answer').slideUp(200);
		}
		else{
			$(this).find('.answer').addClass('open');
			$(this).find('.answer').slideDown(200);
		}
	});
});