

let arr=[];//创建一个空数组，用于存放52张牌

let hsarr=['c','h','s','d'];//存放花色信息的数组

let mark={};//定义一个对象，作为判断是否创建过某张牌的标记，

while(arr.length<52){//生成每张牌的信息并存入数组
	let sz=Math.ceil(Math.random()*13);//产生1-13的随机数
	let hs=hsarr[Math.floor(Math.random()*hsarr.length)];//产生花色下标的随机数并取到花色数组中对应的花色
	if(!mark[sz+'-'+hs]){//判断标记中这张牌是否创建过，如果创建过，则进行下次循环，否则放入数组，并创建标记
		mark[sz+'-'+hs]=true;
		arr.push({sz,hs});
	}
}

//发牌的动作
let n=0;
//每一行的阶梯式发牌
for(let i=0;i<7;i++){
	for(let j=0;j<=i;j++){
		$('<li class=card>').attr('id',i+'-'+j).attr('value',arr[n].sz).css('background-image',`url(img/${arr[n].sz}${arr[n].hs}.png)`).appendTo('ul').delay(n*50).animate({
			left:310-50*i+100*j,
			top:i*50,
			opacity:1,
		});
		n++;
	}	
}		
//剩下的牌放在底部
for(n;n<arr.length;n++){
	$('<li class="card cleft">').attr('id',7+'-'+n).attr('value',arr[n].sz).css('background-image',`url(img/${arr[n].sz}${arr[n].hs}.png)`).appendTo('ul').delay(n*50).animate({
	left:100,
	top:460,
	opacity:1,
});
}


let score=0;
let now=null;//用于存放两次点击纸牌的信息
//牌的点击事件
$('li').click(function(){
	//获取点击的牌的行列坐标
	let x=parseInt($(this).attr('id').split('-')[0]);
	let y=parseInt($(this).attr('id').split('-')[1]);
	
	if(x<6){//进行判断，被压着的纸牌不能点
		if($(`#${x+1}-${y}`).length==1||$(`#${x+1}-${y+1}`).length==1){
			alert('请不要点击被压着的纸牌');
			return;
		}
	}
	
	$(this).toggleClass('active');
	//进行消除的动作
	if(!now){//判断条件为真，即now为空对象时,给他赋值
		if($(this).attr('value')==13){
			score+=10;
			$(this).animate({
				left:600,
				top:700,
				opacity:0,
			},function(){
				$(this).remove();
				now=null;
			});
		}else{
			now=$(this);
		}
	}else{
		if(parseInt(now.attr('value'))+parseInt($(this).attr('value'))==13){
			score+=10;
			$('.active').animate({
				left:600,
				top:700,
				opacity:0,
			},function(){
				$('.active').remove();
				now=null;
			})
		}else{
			setTimeout(function(){
				$('.active').removeClass('active');
				now=null;
			},400);
			
		}
	}
	
	$('div.num').html(score);

})

	



let index=1;
$('div.right').click(function(){
	$('.cleft').last().removeClass('cleft').addClass('cright').css('z-index',index++).animate({
	left:470,
	top:460,
	});
})

$('div.left').click(function(){
	$('.cright').removeClass('cright').addClass('cleft').css('z-index',index++).each(function(i){
		$(this).delay(i*50).animate({
			left:100,
			top:460,
		});
	});
})

$('div.again').click(function(){
	location.reload();
})