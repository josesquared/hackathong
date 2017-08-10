$(document).ready(function(){
	$(document).keydown(function(e) {
		switch(e.keyCode){
			case 38: //up
				break;
			case 39: //right
				$('.body').css('animation-duration', '.3s');
				$('.legs').css('animation-duration', '.25s');
				$('.front-arm').addClass('front-arm-motion');
				$('.middle').addClass('middle-motion');
				break;
			case 40: //down
				break;
			case 37: //left
				break;
			case 32: //space bar
				$('.body').css('animation-duration', '.2s');
				break;
		}
	});
	
	$(document).keyup(function(e){
		$('.head').css('animation-duration', '1s');
		$('.body').css('animation-duration', '.5s');
		$('.legs').css('animation-duration', '0s');
		$('.front-arm').removeClass('front-arm-motion');
		$('.middle').removeClass('middle-motion');
	});
});