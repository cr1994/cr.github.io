$(function(){
	
	$("#loginform").validate({
		rules:{
			user:{
				required:true,
			},
			phone:{
				required:true,
				minlength: 11
			},
			pass:{
                required:true,
             	minlength:6
            },
            sure:{
            	required:true,
            	equalTo: "#pass"
            }
		},
		messages:{
		// 	user:"请输入名字",
		// 	phone:{
		// 		required:"请输入手机号码",
		// 		number: "请输入数字",
		// 		minlength: 11,
		// 		range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
		// 	},
		// 	pass:{
		// 		required:"请输入密码",
		// 		minlength:$.validator.format("密码不能小于{0}个字符")
		// 	},
		// 	sure:{
		// 		required:"请再次输入密码",
		// 		equalTo: "pass"
		// 	}
		},
		errorElement:"b",
		errorPlacement:function(error,val){
			if($(val).next('b').length==0){
				error.css("color","red").insertBefore(val.parent());
			}
		},
		success:function(success,val){
			if($(val).next('i').length==0){
				$("<i>").css({"width":"10px","height":"10px","borderRadius":"50%","background":"red"}).insertBefore(val);
			}
			console.log($("i"));
		}
	})
	$("#gou").on("click",function(){
		$("#loginform").submit();
	})
})
$.validator.setDefaults({
	submitHandler:function(){
		alert("注册成功");

	}
})
