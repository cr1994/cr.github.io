$(function(){
	//小屏下的点击下拉事件
	
//	var tt=setTimeout(function(){
//		$('.smhr span').click(function(){
//			clearTimeout(tt);
//			$('.smhr span').toggleClass('icon-hanbaobao');
//			$('.down').toggleClass('active');
//			
//		})
//	},300);
	

	//头部定位
	var src;
	$(window).scroll(function(){
		src=$(document).scrollTop();
//		console.log(src);
//		console.log($(window).height()*0.8)
		//介绍部分出现
		$('.intro').addClass('active');
		//头部定位
		clearInterval(t);
		if(src>100){
			$('.head').addClass('fix');
		}else{
			$('.head').removeClass('fix');
		}
		
		//Banner部分
		if(src<$(window).height()*0.8){
			$('.banner').css('background-position-y',`${src/2}px`);
		}else{
			$('.banner').css('background-position-y','0px');
			
		}
		
		//技能部分
//		console.log($('.skills').find('.ps,.js,.html,.css'))
		if(src>=$('.skill').offset().top-400){
			$('.ps,.js,.html,.css').addClass('active');
		}
	})
	
	//轮播
	var n=0;
	var t=setInterval(function(){
		n++;
		if(n>=$('.banner').length){
			n=0;
		}
		$('.banner').fadeOut().eq(n).fadeIn(1500);
		$('.cir li').removeClass('active').eq(n).addClass('active');
		$('.font').fadeOut().eq(n).fadeIn(1500);
	},2000)
	
	$('.cir li').click(function(){
		clearInterval(t);
		$('.banner').fadeOut().eq($(this).index()).fadeIn(1500);
		$('.cir li').removeClass('active').eq($(this).index()).addClass('active');
		$('.font').fadeOut().eq($(this).index()).fadeIn(1500);
		n=$(this).index();
	})
	
	//大屏遮罩
//	console.log($('.imgs'))
	$('.imgbox').each(function(index,val){
			$(this).find('.imgs').hover(function(){
//			console.log($(this).index());
			$('.imgbox').eq(index).find('.shadow').removeClass('active').eq($(this).index()).addClass('active');
		},function(){
			$('.imgbox').eq(index).find('.shadow').removeClass('active');
		})
	})
	

	//作品选项卡
	// $('ul.title li').click(function(){
	// 	$('ul.title li').removeClass('active').eq($(this).index()).addClass('active');
	// 	$('.imgbox').fadeOut().eq($(this).index()).fadeIn(500);
	//
	// })
    $('ul.title li:eq(0) a').tab('show');


	//楼层跳转
	var htwo=$('h2');
	// console.log(htwo);
	var arr=[],brr=[];
	// console.log(arr[0]);
//	console.log($('.text a'));
	$('.text').click(function(){
		arr=htwo.map(function(index,val){
			return $(this).offset().top-100;
		})
		var nn=$(this).index();
		$(document.body).animate({scrollTop:arr[nn]},500);
	})

	//下拉
	$('.down li').click(function(){
		var mm=$(this).index();
		brr=htwo.map(function(index,val){
			return $(this).offset().top-100;
		})
//		console.log(arr[mm]);
		$(document.body).animate({scrollTop:brr[mm]},500);
		$('.menu-button').removeClass('cross');
		$('.down').hide(500);
	})
	
	$('.menu-button').click(function(){
		$(this).toggleClass('cross');
		$('.down').toggle(500);
		
	})
	
	
	//swiper
//	var toggleMenu = function(){
//			if (swiper.previousIndex == 0)
//				swiper.slidePrev()
//		}
//		, menuButton = document.getElementsByClassName('menu-button')[0]
//		, swiper = new Swiper('.swiper-container', {
//			slidesPerView: 'auto'
//			, initialSlide: 1
//			, resistanceRatio: .00000000000001
//			, onSlideChangeStart: function(slider) {
//				if (slider.activeIndex == 0) {
//					menuButton.classList.add('cross')
//					menuButton.removeEventListener('click', toggleMenu, false)
//				} else
//					menuButton.classList.remove('cross')
//			}
//			, onSlideChangeEnd: function(slider) {
//				if (slider.activeIndex == 0)
//					menuButton.removeEventListener('click', toggleMenu, false)
//				else
//					menuButton.addEventListener('click', toggleMenu, false)
//			}
//			, slideToClickedSlide: true
//		})
})
