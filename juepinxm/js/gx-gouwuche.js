$(function(){
	let dian=$(".header .leimu2 .kuang .three");
	let ping=$('.ping')
	dian.click(function(index){
		dian.removeClass('active').eq($(this).index()).addClass('active');
		$(this).parents('.header').siblings('.ping').css('display','none').eq($(this).index()).css('display','block')
	})
})