'use strict'
$(function(){
	let lis=$('.sm-header .container .row .menu');
	$(window).resize(function(){
		let width=$(window).width();
		if(width<=750){
			lis.off();
			lis.click(function(){
				$('body,html').toggleClass('sm-hidden');
				$('.pull').slideToggle(500);
			})
		}
	})
	$(window).triggerHandler('resize');
	//轮播图
	let box=$('.banner');
	let img=$('.banner > .box > li');
	let li=$('.banner > .circle > li');
	let left=$('.banner > .left');
	let right=$('.banner > .right');
	getShuff(box,img,li,left,right);
	function getShuff(box,img,li,left,right){
		let n=0;
		let flag=true;
		function move(way='right'){
			if(way=='right'){
				n++;
				if(n>=img.length){
					n=0;
				}
			}
			else if(way=='left'){
				n--;
				if(n<0){
					n=img.length-1;
				}
			}
			img.fadeOut();
			li.removeClass('select');
			img.eq(n).fadeIn(200,function(){
				flag=true;
			});
			li.eq(n).addClass('select');
		}
		let t=setInterval(move,1800);
		box.mouseover(function(){
			clearInterval(t);	
		})
		box.mouseout(function(){
			t=setInterval(move,1800);
		})
		let m;
		li.click(function(){
			m=setTimeout(()=>{
				img.fadeOut();
				li.removeClass('select');
				img.eq($(this).index()).fadeIn(200);
				li.eq($(this).index()).addClass('select');
				n=$(this).index();
			},200)
			li.mouseout(function(){
				clearTimeout(m);
			})
		})
		left.click(function(){
			if(flag){
				flag=false;
				move('left');
			}
		})
		right.click(function(){
			if(flag){
				flag=false;
				move();
			}
		})
	}
	$('.tea .tea-contain .t-row .tea-col').hover(function(){
		$(this).addClass('t-active');
	},function(){
		$(this).removeClass('t-active');
	})
	var swiper = new Swiper('.swiper-container', {
       
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
       	slidesPerView:"auto",
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows : true
        },
        loop:true,
        autoplay:2000,
    });
    
    var clear=$('button.null');//清空按钮
	var sub=$('button.sub');//提交按钮
	var inp=$('form input,textarea');

	//2.清空功能
	clear.click(function(e){
		e.preventDefault();
		inp.val('');
		$('form div.error').remove();
	})
	//3.提交功能
	var j=4;
	sub.click(function(e){
		e.preventDefault();
		if(inp.eq(0).val()&&inp.eq(1).val()&&inp.eq(2).val()&&inp.eq(3).
		val()&&(!$('form div.error').html())){
			alert('提交成功')
			inp.val('');
		}else{
			if($('form div.error').html()){
				alert('请确保格式正确');
			}else{
				alert('请输入内容');
			}
			
		}
	})
	$('form').validate({
		rules:{
			name:{
				required:true,
			},
			email:{
				required: true,
			},
			title:{
				required: true,
			}
		},
		messages:{
			name:{
				required:'please input your name',
			},
			email:{
				required: 'please input your email',
			},
			title:{
				required: 'please input your title',
			}
		},
		errorElement:'div',//设置提示信息的标签类型
	})
})
