jQuery(document).ready(function($) {

});

//===========================================================
// IMAGE-BACKGROUND (IBG)
// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// }
// ibg();

//===========================================================
// ADAPTIVE MENU (BURGER)
// $('.header__burger').click(function(event) {
// 	$('.header__burger,.header__menu').toggleClass('active'); // открываем/закрываем меню
// 	$('body').toggleClass('lock');
// 	// не даем странице прокручиваться при открытом меню
// });

//===========================================================
// TABS
// var tab = $('.tab');

// tab.on('click', function() {

// 	$('.active').removeClass('active');
// 	$(this).toggleClass('active');

// 	var target = $(this).attr('href');

// 	$(target).toggleClass('active');
// });

//===========================================================
// GO-TO
// $('.go-to').click(function() {
// 		var target = $(this).attr('href').replace('#','');
// 	$('body, html').animate(
// 		{
// 			scrollTop: $('.' + target).offset().top
// 		},
// 		500
// 	);
// });

//===========================================================
// FILTER
// $('.filter__item').click(function(event) {
// 	var i = $(this).data('filter');
// 	if (i == 0) {
// 		$('.block__item').show();
// 	} else {
// 		$('.block__item').hide();
// 		$('.block__item.filter_' + i).show();
// 	}

// 	$('.filter__item').removeClass('active');
// 	$(this).addClass('active');			
// });

//===========================================================
// SPOILERS
// $('.spoilers__title').click(function(event) {
// 	if($('.spoilers').hasClass('just-one-open')) {
// 		$('.spoilers__title').not($(this)).removeClass('active');
// 		$('.spoilers__text').not($(this).next()).slideUp(300);
// 	}
// 	$(this).toggleClass('active').next().slideToggle(300);
// });