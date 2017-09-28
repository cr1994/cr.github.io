//判断密码（6-20位，数字字母下划线的组合）
function password(str){
	let reg=/^\w{6,20}$/;
	let reg2=/(?:\d[a-zA-Z]|[a-zA-Z]\d)/;
	if(reg.exec(str)&&reg2.exec(str)){
		return true;
	}
	return false;
}
//获取元素
let lbtn=document.querySelector('button.lbtn');
let luser=document.querySelector('input.luser');
let lpass=document.querySelector('input.lpass');


//添加事件
lpass.onblur=function(){
	if(password(lpass.value)){
		lpass.value=lpass.value;
	}else if(lpass.value==''){
		lpass.value=lpass.value;
	}else{
		alert('密码格式错误，请重新输入密码');
		lpass.focus();
		lpass.value='';
	}
}

lbtn.onclick=function(){
	if(luser.value&&lpass.value){
		alert('登录成功！');
		history.go(-1);
	}else if(luser.value==''){
		alert('请输入用户名');
	}else if(lpass.value==''){
		alert('请输入密码');
	}
}
