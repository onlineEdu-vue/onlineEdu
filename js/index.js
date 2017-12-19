/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-11-19 19:03:46
 * @version $Id$
 */
$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		 	autoplay: 2000,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		  });
	$("#login").on('click',function(){
		$('#regester').show();
	})
})
