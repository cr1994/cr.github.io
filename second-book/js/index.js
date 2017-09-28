//热门推荐轮播
	var box1=document.querySelector("div.pic-four");//获取大盒子
	var picbox1=box1.querySelector("ul");//获取图片的盒子
	var left1=box1.querySelector("div.left");//获取左箭头
	var right1=box1.querySelector("div.right");//获取右箭头
	var widthj=parseInt(getComputedStyle(box1,null).width);
	//获取盒子的宽度，以便在animate中使用	
	var t1=setInterval(moveright,2000);//设置时间函数	
	//！！！！对图片盒子进行操作
	function moveright(){//向右移动的时间函数
		var first=picbox1.firstElementChild;
		//获取图片盒子里的第一个元素节点
		animate(picbox1,{left:-widthj/4},1000,function(){
		//给图片盒子添加动画，让盒子整体往左移一个div的宽度（此时会显示第二个li里的图片）
		//盒子移动后：
			picbox1.appendChild(first);
			//把第一张图片放在图片盒子的最后，以便轮播
			picbox1.style.left=0;
			//把图片盒子拉回到大盒子里
			flag1=true;
			//运动完成后开关开启，（与右箭头有关）
		});
	}
	function moveleft(){//向左移动的时间函数
		var first=picbox1.firstElementChild;
		//获取盒子当前的第一个元素节点
		var last=picbox1.lastElementChild;
		//获取盒子的最后一个元素节点
		picbox1.insertBefore(last,first);
		//把最后一个元素节点放在第一个元素节点的左边
		picbox1.style.left=-widthj/4+'px';
		//让图片盒子向左移动，此时最后一个节点在盒子的开头处显示，
		//但是该节点并没有显示在div的大盒子里，而是在大盒子的左边
		animate(picbox1,{left:0},1000,function(){
			//让图片盒子往右移动，此时图片片盒子的开头在div的大盒子里，并显示Last
			//（此时last已经成为图片盒子的第一个元素节点）
			flag1=true;
			//动画完成后将开关打开（与左箭头的点击有关）
		});
	}
	box1.onmouseover=function(){
		//给大盒子添加鼠标的移入事件，移入时清除事件函数
		clearInterval(t1);
	}
	box1.onmouseout=function(){
		//黑大盒子添加鼠标的移出事件，移出后继续时间函数
		t1=setInterval(moveright,2000);
	}
	var flag1=true;//设置一个开关，用于解决点击左右箭头时
	//图片没有完全出现就进入下一张的问题
	left1.onclick=function(){
		//给左箭头添加鼠标点击事件
		if(flag1){
			flag1=false;
			moveleft();
		}
	}
	right1.onclick=function(){
		//给右箭头添加鼠标的点击事件
		if(flag1){
			flag1=false;
			moveright();
		}
		
	}
//banner轮播
	function carousel(box1,pics1,circles1,classname1){
		let box=document.querySelector(box1);
		let pics=box.querySelectorAll(pics1);
		let circles=box.querySelectorAll(circles1);		
		let n=0;
		
		function move(){
			n++;
			if(n>pics.length-1){
				n=0;
			}
			for(let i=0;i<circles.length;i++){
				pics[i].classList.remove(classname1);
				circles[i].classList.remove(classname1);
			}
			pics[n].classList.add(classname1);
			circles[n].classList.add(classname1);	
		}
		
		
		let t=setInterval(move,1500);
		box.onmouseover=function(){
			clearInterval(t);
		}
		box.onmouseout=function(){
			t=setInterval(move,1500);
		}
		
		let m;
		for(let j=0;j<circles.length;j++){
			circles[j].onmouseover=function(){
				m=setTimeout(function(){
					for(let i=0;i<circles.length;i++){
						circles[i].classList.remove(classname1);
						pics[i].classList.remove(classname1);
					}
					pics[j].classList.add(classname1);
					circles[j].classList.add(classname1);	
					n=j;
				},200);
			}
			circles[j].onmouseout=function(){
				clearTimeout(m);
			}
		}
	}

	carousel("div.ban","ul.pic > li","div.circle > div","active");