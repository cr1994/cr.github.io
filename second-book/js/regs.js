//判断密码（6-20位，数字字母下划线的组合）
function password(str){
	let reg=/^\w{6,20}$/;
	let reg2=/(?:\d[a-zA-Z]|[a-zA-Z]\d)/;
	if(reg.exec(str)&&reg2.exec(str)){
		return true;
	}
	return false;
}
//判断邮箱
function mailnum(str){
	let reg=/\w+@(qq|163|139|126|sina|sohu|189|gmail)\.com$/;
	return reg.exec(str);
}
//判断手机号码
function phonenum(str){
	let reg=/^1[3578]\d{9}/;
	return reg.exec(str);
}

let user=document.querySelector('input.user');
let pass=document.querySelector('input.pass');
let mail=document.querySelector('input.mail');
let tel=document.querySelector('input.tel');
let btn=document.querySelector('button.recover');

pass.onblur=function(){
	if(password(pass.value)){
		pass.value=pass.value;
	}else{
		alert('密码格式错误，请重新输入密码');
		pass.focus();
		pass.value='';
	}
}
tel.onblur=function(){
	console.log(phonenum(tel.value));
	if(phonenum(tel.value)){
		tel.value=tel.value;
	}else if(tel.value==''){
		tel.value=tcon;
	}else{
		alert('手机号格式错误，请重新输入');
		tel.value=tcon;
	}
}
mail.onblur=function(){
	console.log(phonenum(mail.value));
	if(mailnum(mail.value)){
		mail.value=mail.value;
	}else if(mail.value==''){
		mail.value=mcon;
	}else{
		alert('邮箱格式错误，请重新输入');
		mail.value=mcon;
	}
}

btn.onclick=function(){
	if(user.value&&pass.value&&mail.value&&tel.value){
		alert('注册成功！');
		history.go(-1);
	}else{
		alert('请输入完整的信息！');
	}
}