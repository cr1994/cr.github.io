$(function(){
	let dian=$(".search-sousuo input")
	dian.focus(function(){
		$(this).parent().next(".xiala").eq($(this).index()).css("display","block");
	})
//	dian.blur(function(){
//		$(this).parent().next(".xiala").eq($(this).index()).css("display","none");
//	})
})