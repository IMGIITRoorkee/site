(function($) {
	var x = $(window).scrollTop();
	if(x > $('.scroll').height() - 66){
		$('.bg-nav').css({'opacity':'1'});
		$('.pushed').css({'padding':'0'});
	}
	else{
		$('.bg-nav').css({'opacity':'0'});
		$('.pushed').css({'padding':'32px'});
	}

	var x = location.pathname.split('/');
	var y = x[x.length-1] === 'index.html';
	if($(window).width()>700 || y){
		$(document).scroll(function(){
			var x = $(window).scrollTop();
			if(x > $('.scroll').height() - 130){
				$('.bg-nav').css({'opacity':'1'});
				$('.pushed').css({'padding':'0'});
			}
			else{
				$('.bg-nav').css({'opacity':'0'});
				$('.pushed').css({'padding':'32px'});
			}
		});
	}
	else{
		$('.bg-nav').css({'opacity':'1'});
	}

	$('.panels header').css({
		'top':$('.passion').height()/2 - $('.panels header').height()/2 + 'px',
	});

	$('.panels').hover(function(){
		$(this).find('header').css({
			'top':'48px',
		});
		if($(this).find('.hover-content').css('display') == 'none'){
			$(this).find('.basic-content').fadeOut(300, function(){
				$(this).next('.hover-content').fadeIn(300);
			})
		}
	}, function(){
		$('.panels header').css({
		'top':$('.passion').height()/2 - $('.panels header').height()/2 + 'px',
		});
		if($(this).find('.basic-content').css('display') == 'none'){
			$(this).find('.hover-content').fadeOut(300, function(){
				$(this).prev('.basic-content').fadeIn(300);
			})
		}

	})
	function slideTo (number) {
		var slide = number;
		var percentage = "-"+slide*100+"%";
		var property = {'right' : percentage};
		console.log(property);
		$('.slider-scrollable').animate(property, 1000);
	}
	$('.scrolly').on("click", function(){
		// var h = $('.top').height();
		// var i = $(window).scrollTop();
		// setInterval(function(){
		// 	if(i < h){
		// 		$(window).scrollTop(10*i++);
		// 	}
		// },0.0003);
		// $(window).scrollTop($('.top').height());
		$(window).scrollTo($('.passion'),300)
	})
})(jQuery);
