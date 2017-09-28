'use strict';
window.onload=function(){
	class Play{
		//构造函数
		constructor(divbox,btn){
			//定义属性，赋初值（有些初值需要用外部的变量，可通过传参数来保存）
			this.box=divbox;
			this.btn=btn;
			
			this.she=[
				{x:0,y:0},
				{x:0,y:1},
				{x:0,y:2}
			];

			this.food={};
			
			this.way='bottom';
			
			this.t=0;
		}
		//创建场景
		scene(){
			//通过for循环来创建小的格子，给小格子添加类名，并把小格子放在大盒子里
			for(let i=0;i<20;i++){
				for(let j=0;j<20;j++){
					let sdiv=document.createElement("div");
					sdiv.id='c'+j+'-'+i;
					this.box.appendChild(sdiv);
				}
			}
		}
		//蛇的表示
		getshe(){
			//通过遍历给初始的蛇加上样式
			this.she.forEach(function(val){
				let shent=document.querySelector('#c'+val.x+'-'+val.y);//获取到初始的蛇的身体对应的div
				shent.className='she'; //添加蛇身体的类名和样式
			})
		}
		
		
		//检查蛇的身体是否与食物或者自身重合
		check(a,b,arr){
			return arr.some(function(value){
				return value.x==a&&value.y==b;
			})
//			return arr.some((value)=>{
//				return value.x==a&&value.y==b;
//			})
		}
		
		//食物的表示和获取
		drawfood(){
				let x,y;//定义两个变量用于保存产生的食物的随机坐标
				let {random:ran,floor:fl}=Math;//解构
				do{
					x=fl(ran()*20);
					y=fl(ran()*20);
				}while(this.check(x,y,this.she));//如果食物的坐标与蛇的身体重合，就重新产生随机数
				document.querySelector('#c'+x+'-'+y).className='food';//给对应id名的div加类名
				this.food={x,y}//给food重新赋值
		}
		
		//时间函数
		move(){
			//定义一个时间函数，让蛇动起来
			this.t=setInterval(()=>{//使用箭头函数的原因：箭头函数没有自己的this,会在当前环境中向上找this(如果换为function(){}的形式，函数体中的this将指向window,匿名函数的this指向window)
				let oldhead=this.she[this.she.length-1];//获取旧的蛇头
				let newhead;//定义一个变量用于保存新的蛇头的对象
				switch(this.way){//判断运动方向，注意一定要加this
					//在各种不同的方向下新蛇头的坐标的获取
					case 'bottom':newhead={x:oldhead.x,y:oldhead.y+1};break;
					case 'top':newhead={x:oldhead.x,y:oldhead.y-1};break;
					case 'left':newhead={x:oldhead.x-1,y:oldhead.y};break;
					case 'right':newhead={x:oldhead.x+1,y:oldhead.y};break;
				}
				
				//找到新的蛇头对应的div
				let newdiv=document.querySelector('#c'+newhead.x+'-'+newhead.y);
				if(newdiv==null||this.check(newhead.x,newhead.y,this.she)){//如果找不到对应的div，说明已经撞墙
					alert("GAME OVER");
					clearInterval(this.t);//清除时间函数
					return;//停止函数的运行
				}
				//给新的蛇头添加类名，并将新蛇头的对象添加在蛇的数组中
				newdiv.className='she';//不能用newdiv.classList.add('she');，否则会出现食物从蛇的身上穿过，且食物不会消失的情况（添加类名后食物的那个类名并没有移出）
				
				this.she.push(newhead);
				
				//如果蛇头和食物的坐标重合时，只加头不去尾
				if(newhead.x==this.food.x&&newhead.y==this.food.y){
					this.drawfood();//再次调用该方法，随机产生食物
				}else{//不重合时进行去尾的操作
					let oldend=this.she[0];//获取到蛇尾
//					document.querySelector('#c'+oldend.x+'-'+oldend.y).className='';//去掉蛇尾的类名
					document.querySelector('#c'+oldend.x+'-'+oldend.y).classList.remove('she');
					this.she.shift();//将蛇尾从数组中删除
				}
				
			},200)
			
			
		}
		//运动方向
		keydown(){
			//添加键盘的按下事件
			document.onkeydown=((e)=>{
				let code=e.keyCode;
				switch(code){
					//判断按下的是哪个键
					case 37:
						if(this.way=='right'){
						return;
						}
						this.way='left';
						break;
					case 38:
						if(this.way=='bottom'){
						return;
						}
						this.way='top';
						break;
					case 39:
						if(this.way=='left'){
						return;
						}
						this.way='right';
						break;
					case 40:
						if(this.way=='top'){
						return;
						}
						this.way='bottom';
						break;	
				}
			})
		}
		
		//once again
		again(){
			//添加按钮的点击事件，模拟重新开始
			this.btn.onclick=function(){
				location.reload();
			}
		}
		//运动
		play(){
			//调用各种方法
			this.scene();
			this.getshe();
			this.drawfood();
			this.move();
			this.keydown();
			this.again();
		}
	}
	
	
	let divbox=document.querySelector("div.box");
	let btn=document.querySelector("button");
	
	let obj=new Play(divbox,btn);//实例化类来创建对象
	obj.play();//调用play方法
}
