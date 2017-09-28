
//选项卡
for(let i=0;i<=6;i++){
	let ele1=document.querySelectorAll('div.f3title')[i];
	let ele2=document.querySelectorAll('div.f3')[i];
	let element1=ele1.querySelectorAll('ul.classity > li');//获取第一个元素集合:title
	let element2=ele2.querySelectorAll('div.f3big');//获取第二个元素集合:pic

	for(let i=0;i<element1.length;i++){//遍历存放标题的集合
		element1[i].onmouseover=function(){//给标题添加鼠标移入的事件
			for(let j=0;j<element1.length;j++){
				element1[j].classList.remove('f3li');
				element2[j].style.display="none";
			}
	element2[i].style.display="block";//让对应图片显示
	this.classList.add('f3li');//给当前鼠标移入的元素添加str1class类名及其对应属性,
	//鼠标移入到哪个身上，this就是谁，this是一个dom对象
		}
	}
}


//楼层跳转
let floors=document.querySelectorAll(".floor");
let ulfix=document.querySelector("ul.fixed-left");
let lis=ulfix.querySelectorAll("li");

let arr=[];
for(let i=0;i<floors.length;i++){
	arr.push(floors[i].offsetTop);
}

window.onscroll=function(){
	if(flag){
		let obj=document.body.scrollTop==0?document.documentElement:document.body;
		let scrolltop=obj.scrollTop;
		
		let foot=document.querySelector("div.foot");

//		
//		if(scrolltop>floors[0].offsetTop-200&&scrolltop<foot.offsetTop-500){
//			ulfix.style.display="block";
//		}else{
//			ulfix.style.display="none";
//		}
		
		for(let i=0;i<floors.length;i++){
			if(scrolltop>arr[i]-500){
				for(let j=0;j<lis.length;j++){
					lis[j].classList.remove('color');
				}
				lis[i].classList.add("color");
			}
		}
	}
	
	
}

let flag=true;
for(let i=0;i<lis.length;i++){
	let height=floors[i].offsetTop;
	lis[i].onclick=function(){
		flag=false;
		for(let j=0;j<lis.length;j++){
			lis[j].classList.remove("color");
		}
		lis[i].classList.add("color");
		animate(document.body,{scrollTop:height-60},500,function(){
			flag=true;
		});
		animate(document.documentElement,{scrollTop:height-60},500,function(){
			flag=true;
		});
	}
}
//楼层跳转结束	