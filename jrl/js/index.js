$(function(){
	var bar = document.getElementById('bar');
	var move = bar.getElementsByTagName('a')[0].offsetWidth;
	var imgNum = 0;
	var btnNum = 0;
	//克隆第一张图片
	var tempImg = $('#bar').children('a').first().clone(true);
	$('#bar').append(tempImg);
	//自动轮播图
	function bannerMove(){
		imgNum++;
		if (imgNum > 4) {			
			imgNum = 1;
			$('#bar').css({'marginLeft': 0,});			
		}
		$('#bar').stop().animate({'margin-left':imgNum*-move}, 800)
		btnNum++;
		if (btnNum > 3) {
			btnNum = 0;
		}
		btn.eq(btnNum).addClass('special').siblings('li').removeClass('special');
	}
	var timer = setInterval(bannerMove,3000);
	//小点点击
	var btn = $('.abtn li');
	btn.click(function(){
		var num = $(this).index();
		btn.eq(num).addClass('special').siblings('li').removeClass('special');
		$('#bar').stop().animate({'margin-left':num*-move}, 800);
		imgNum = btnNum = num;
	})
	//停止轮播
	$('.banner').hover(function() {
		clearInterval(timer)
	}, function() {
		timer = setInterval(bannerMove,3000);
	});
})