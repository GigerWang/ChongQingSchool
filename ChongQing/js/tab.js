/*$(document).ready(function(){
		$('.cen_con_ri').children('h2').click(function() {
		$('.cen_con_ri').children('h2').removeClass('hactive');
		$('.cen_con_ri').children('div').css('display', 'none');
		$(this).addClass('hactive');
		$('.cen_con_ri').children('div').eq($(this).index()).fadeIn(500);
	})
})*/

$(document).ready(function(){

	$('.nav_one').children('li').mouseover(function(){
		$(this).children('div').fadeIn(200);
		$(this).children('a').css('background','rgba(240,245,248,0.8)');
		console.log(1);
	});
	$('.nav_one').children('li').children('div').mouseover(function(){
		$(this).css('display','block');
	});
	
	$('.nav_one').children('li').mouseout(function(){
		$(this).children('div').css('display','none');
		$(this).children('a').css('background','rgba(255,255,255,0)');
	});
})
