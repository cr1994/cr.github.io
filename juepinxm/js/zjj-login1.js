$(function(){

	// console.log($("#n").get().value);
	$("#loginform").validate(
	{
		rules:{
			user:{
				required:true,
			},
			pass:{
                required:true,
             	rangelength:[6,12]
            },
		},
		messages:{
			function(messages,val){
				if(val.next.length==0){
					user:{
						required:"请输入名字"
					}
				}else {
					pass:{
						required:"请输入密码"
						 minlength:$.validator.format("密码不能小于{0}个字符")
					}
				}
			}
//			user:{
//				required:"请输入名字",
//			},
//			pass:{
//              required:,
//           	rangelength:[6,12]
//          },
			
			
			
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
//	$("#login").on("click",function(){
//		$("#loginform").submit();
//		
//	})
//})
//	$.validator.setDefaults({
//		submitHandler:function(){
//			alert("登录成功");
//			location.replace('gx-gouwuche.html');
//
//		}
	})


