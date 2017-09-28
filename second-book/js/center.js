let btn=document.querySelector('button.recover');
let btns=document.querySelector('button.save');
let mail=document.querySelector('input.mail');
let tel=document.querySelector('input.tel');

let mcon=mail.value;
let tcon=tel.value;

btn.onclick=function(){
	mail.value='';
	mail.focus();
}
btns.onclick=function(){
	alert('保存成功！');
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


tel.onfocus=function(){
	tel.value='';
}
tel.onblur=function(){
	console.log(phonenum(tel.value));
	if(phonenum(tel.value)){
		tel.value=tel.value;
	}else if(tel.value==''){
		tel.value=tcon;
	}else{
		alert('格式错误，请重新输入');
		tel.value=tcon;
	}
}
mail.onfocus=function(){
	mail.value='';
}
mail.onblur=function(){
	console.log(phonenum(mail.value));
	if(mailnum(mail.value)){
		mail.value=mail.value;
	}else if(mail.value==''){
		mail.value=mcon;
	}else{
		alert('格式错误，请重新输入');
		mail.value=mcon;
	}
}