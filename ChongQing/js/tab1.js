$(document).ready(function(){
	$('.situation_show').children('div').click(function(){
		$('.situation_show').children('div').attr('class','');
		$('.situation_show').children('div').addClass(function(index){
			var s=index+1;
			return "sit_show"+s;
		});
		$(this).addClass(function(i){
			var a = $(this).index()+5;
			return 'sit_show'+a;
		})
		$('.situation_tab').children('div').css('display','none');
		$('.situation_tab').children('div').eq($(this).index()).fadeIn(500);
	});
	$('.situation_show').each(function(i,el){
	
	})
})
