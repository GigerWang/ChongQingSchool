$(document).ready(function(){
	var flag;
	$('.inpusub').children('input:first-child').click(function(){

		flag=true;
		$('.online_input_bottom').children('input[data-se="tr"]').each(function(){
			if($(this).val()==""){
				$(this).parents('.online_input_bottom').siblings('.online_input_title1').css('color','red');
				flag=false;
			}
		})

		$('.online_input_bottom').children('.se').each(function(){
			if($(this).children('option:first-child').is(':checked')){
				$(this).parents('.online_input_bottom').siblings('.online_input_title1').css('color','red');
				flag=false;
			}
		})

		if(!flag){
				alert('请将信息填写完整');
		}

	})

	$('.online_input_bottom').children('input[data-se="tr"]').each(function(){
		$(this).click(function(){
			$(this).parents('.online_input_bottom').siblings('.online_input_title1').css('color', 'black');
		});
	})
	$('.online_input_bottom').children('.se').each(function(){
		$(this).click(function(){
			$(this).parents('.online_input_bottom').siblings('.online_input_title1').css('color', 'black');
		});
	})
	var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/; 
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
	
	$('.inpu').children('div:eq(16)').find('input').blur(function(){
		if (!phoneReg.test($(this).val())){  
		    alert('请输入有效的手机号码！');  
		} 
	})	
	
	$('.inpu').children('div:eq(4)').find('input').blur(function(){
		if (!reg.test($(this).val())){  
		    alert('请输入有效的身份证号！');  
		} 
	})		

})
