var app = $('#app');
var row;//行
var col;//列
var liArr = [];
var goldArr = [];
var lis;
//1.场景建设
function creatSecne(){
	var appWidth = app.width();
	var appHeight = app.height();
	row = appWidth / 71;
	col = appHeight / 71;
	var liStr = '';
	for(var j = 0;j < col; j++){
		for(var i = 0;i < row; i++){
			liStr += '<li data="0" id=' + j + '-' + i +'></li>';
			liArr.push(j + '-' + i);
		}
	}
	console.log(liArr);
	app.append(liStr);
	lis = $('#app li');
}
creatSecne();

//2.随机生成雷
function creatGold(){
	
	do{
		var randX = getRand(col);//横坐标
		var randY = getRand(row); //纵坐标
		var key = randX + '-' + randY;

		if($.inArray(key,goldArr) == -1){
			goldArr.push(key);
		}
	}while(goldArr.length < 8);
	console.log(goldArr)	
}
// 随机获取横纵坐标
function getRand(max){
	return Math.floor(Math.random()*10000)%max;
}
creatGold();


//3.雷周围的各自的处理
function arround(){
	goldArr.forEach(function(value,index){
		var r = value.split('-')[0];
		var c = value.split('-')[1];
		console.log(r,c);
		$('#'+value).attr('data',-1);
		// $('#'+value).addClass('gold')
		setNum(r,c);
	});


}
arround();
//设置雷周围的数字及剩余格子数值为0
function setNum(r,c){
	r = parseInt(r);
	c = parseInt(c);
	for(var rr = r - 1;rr < r + 2;rr++){
		for(var cc = c -1;cc < c + 2;cc++){
			if(rr >= 0 && rr < row 
				&& cc >= 0 &&cc < col 
				&& !(rr === r && cc === c)
				&& $('#'+rr+'-'+cc).attr('data') != -1){
				$('#'+rr+'-'+cc).attr('data',Number($('#'+rr+'-'+cc).attr('data'))+1);
			}
		}
	}
}

//4.设置点击事件
lis.each(function(){
	$(this).click(function(){
		if($(this).attr('data') == -1){
			$(this).addClass('gold');
			alert('GAME OVER!');
		}else{
			$(this).addClass('white');
			$(this).html($(this).attr('data'));
		}
	})
})



