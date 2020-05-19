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

//===========================================================
// DROP-DOWN MENU
// let isMobile = {
//     Android: function() { return navigator.userAgent.match(/Android/i); },
//     BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
//     iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
//     Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
//     Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
//     any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
// }; /* определяет является ли устройство мобильным (ключевое: есть тачскрин или нет) */

// let body = document.querySelector('body');

// if (isMobile.any()) {
//     body.classList.add('touchscreen');

//     let arrow = document.querySelectorAll('.arrow');
//     for (var i = 0; i < arrow.length; i++) {
//         let thisLink = arrow[i].previousElementSibling;
//         let subMenu = arrow[i].nextElementSibling;
//         let thisArrow = arrow[i];

//         thisLink.classList.add('parent');
//         arrow[i].addEventListener('click', function() {
//             subMenu.classList.toggle('open');
//             thisArrow.classList.toggle('active')
//         });
//     }
// } else {
//     body.classList.add('mouse');
// }