$(document).ready(function(){
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
	
	
	
	
	
	
	//分页
	var pagea=$('li.nubli > a');
	var pagel=$('ul.pagination > li > a.lefta');
	var pager=$('ul.pagination > li > a.righta');
	
	
	pagea.click(function(){
		pagea.removeClass('active');
		$(this).addClass('active');
	})
	pagel.click(function(){
		var ind;
		pagea.each(function(index,val){
			if(val.className=='nub active'){
				ind=index;
			}
		})
		
		if(ind<0){
			ind=pagea.length-1;
		}
		ind=ind-1;
		pagea.removeClass('active');
		pagea.eq(ind).addClass('active');
		
	})
	pager.click(function(){
		var indr;
		pagea.each(function(index,val){
			if(val.className=='nub active'){
				indr=index;
			}
		})
		indr=indr+1;
		if(indr>pagea.length-1){
			indr=0;
		}
		
		pagea.removeClass('active');
		pagea.eq(indr).addClass('active');
		
	})
	
	//留言板
	//1.写入留言
	var ulhad=$('ul.had');
	for(var i=0;i<4;i++){
		var lin=$('<li>');
		lin.html(`<div class="content">
								<div class="num">
									<div class="cir">0${4-i}</div>
								</div>
								<div class="name">
									<p>代用名</p>
									<p>2016-8-31</p>
									<p><span class='del'>删除留言</span>&nbsp;/&nbsp;回复留言</p>
								</div>
								<div class="words">
									<p>青藤茶馆是杭城较早开始连锁经营的茶馆，由一公园至六公园，然后又回到一公园，围绕西湖做文章，规模一家比一家大。</p>
								</div>
							</div>`)
		lin.appendTo(ulhad);
	}
	
	
	
	var clear=$('button.null');//清空按钮
	var sub=$('button.sub');//提交按钮
	var inp=$('form input,textarea');
//	inp.each(function(){
//		if($(this).val()){
//			console.log(false) ;
//		}else{
//			console.log(true);
//		}
//	})

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
		
		if(inp.eq(0).val()&&inp.eq(1).val()&&inp.eq(2).val()&&inp.eq(3).val()&&(!$('form div.error').html())){
			j++;
			var linn=$('<li>');
			linn.html(`<div class="content">
									<div class="num">
										<div class="cir">0${j++}</div>
									</div>
									<div class="name">
										<p>${inp.eq(0).val()}</p>
										<p>2016-8-31</p>
										<p><span class='del'>删除留言</span>&nbsp;/&nbsp;回复留言</p>
									</div>
									<div class="words">
										<p>${inp.eq(3).val()}</p>
									</div>
								</div>`)
			
			linn.prependTo(ulhad);	
			inp.val('');
		}else{
			if($('form div.error').html()){
				alert('请确保格式正确');
			}else{
				alert('请输入内容');
			}
			
		}
	})
	//4.删除功能
	var del=ulhad.find('span.del');
	del.hover(function(){
			$(this).css('color','red');
	},function(){
			$(this).css('color','#333');
	})
	del.click(function(){
		$(this).parentsUntil('ul').remove();
	})
	//5.表单验证
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
