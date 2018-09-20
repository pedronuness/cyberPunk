$('.menu-nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('header').height();
	
	$('html, body').animate({
		scrollTop: targetOffset -menuHeight -10
	}, 500)
});

$('.logo').click(function(e){
	e.preventDefault();
	
	$('html, body').animate({
		scrollTop: 0
	}, 500)
})

$('.bloco').each(function(){
	var height = $(this).height(),
			offSetTop = $(this).offset().top,
			menuHeight = $('header').innerHeight(),
			id = $(this).attr('id'),
			$itemMenu = $('a[href="#' + id +'"]');
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(offSetTop - menuHeight < scrollTop && offSetTop + height - menuHeight > scrollTop){
			$itemMenu.addClass('active');
		}else{
			$itemMenu.removeClass('active');

		}
	})
});

//Menu Mobile

$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});


//Animação de entrada
$(window).scroll(function(){
	var windowTop = $(this).scrollTop();
	$('.anime').each(function(){
		if(windowTop > $(this).offset().top - 400){
			$(this).addClass('anime-init');
		}else{
			$(this).removeClass('anime-init');
		};
	})
})
