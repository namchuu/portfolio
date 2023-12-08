$(document).ready(function(){
	$('html').css({'cursor':'url(images/mouse.png), auto'});

	$('#main>h2').click(function(){
		if($('#right-slidebar').hasClass('aa')){
			$('#right-slidebar').removeClass('aa');
		}else{
			$('#right-slidebar').addClass('aa');
		}
	});

	$('#menu1').click(function(){
		let offset = $('#main').offset();
		$('html').animate({scrollTop : offset.top}, 700);
	});
	$('#menu2').click(function(){
		let offset = $('#keyword').offset();
		$('html').animate({scrollTop : offset.top}, 700);
	});
	$('#menu3').click(function(){
		let offset = $('#portfolio').offset();
		$('html').animate({scrollTop : offset.top}, 700);
	});
	$('#menu4').click(function(){
		let offset = $('#work').offset();
		$('html').animate({scrollTop : offset.top}, 700);
	});
	$('#menu5').click(function(){
		let offset = $('#end').offset();
		$('html').animate({scrollTop : offset.top}, 700);
	});
});

document.addEventListener('DOMContentLoaded', () => {
	new TypeIt('h1')
	.pause(500)
	.go();
});

ScrollOut({});