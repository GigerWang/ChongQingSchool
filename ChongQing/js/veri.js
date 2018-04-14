$(document).ready(function(){
	var code=' ';
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	var chin= /^[\u4e00-\u9fa5]+$/;
	function codev(){
		code="";
		var codelen=4;
		var arr1=new Array(0,1,2,3,4,5,6,7,8,9,0,'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M');
		for(var i=0;i<codelen;i++){
			var index = Math.floor(Math.random()*36);
			code+=arr1[index];
		}
		$('#authcode').html("");
		$('#authcode').html(code);
	}
	codev();
	$('#authcode').click(function(){
		codev();
	})
	$('#coninqu').click(function(){
		if($('#concade').val().toUpperCase() == ''){
			alert('请填写验证码');
		}else if($('#concade').val().toUpperCase() != code){
			$('#concade').val('');
			alert('请填写正确的验证码');
		}else if (!reg.test($('#concard').val())){  
		    alert('请输入有效的身份证号！');
		}else if (!chin.test($('#conname').val())){  
		    alert('请输入正确的姓名格式！');
		}else if($('#concard') !="" && $('#conname') !=""){
			window.location.href='index.html';
		}
	})
	

	
	
})
