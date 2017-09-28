//选项卡效果
let lefts=document.querySelectorAll('div.mchose > p');
let rights=document.querySelectorAll('div.right > div');

for(let i=0;i<lefts.length;i++){
	lefts[i].onclick=function(){
		for(let j=0;j<lefts.length;j++){
			lefts[j].classList.remove('active');
			rights[j].classList.remove('active');
		}
		lefts[i].classList.add('active');
		rights[i].classList.add('active');
	}
}
