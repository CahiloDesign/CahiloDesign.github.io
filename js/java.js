$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.content').css({
		'transform" : "translate(0px, "+ wScroll /2 +"%)'
	});

});
