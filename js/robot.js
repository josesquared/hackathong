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
				$('.character').removeClass('flip');
				break;
			case 37: //left
				$('.body').css('animation-duration', '.3s');
				$('.legs').css('animation-duration', '.25s');
				$('.front-arm').addClass('front-arm-motion');
				$('.middle').addClass('middle-motion');
				$('.character').addClass('flip');
				break;
			case 40: //down
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
	
	var scrolling;
	$(window).bind('mousewheel', function(event) {
		var scrollEvent = event;
		clearTimeout(scrolling);
		scrolling = setTimeout(function() {
		    if (scrollEvent.originalEvent.wheelDelta >= 0) {
		        console.log('Scroll up');
		    }
		    else {
		        console.log('Scroll down');
		    }
		  }, 250);
	});
		
	
	// var scrolling;
// 	$(window).bind('mousewheel', function(event) {
// 		clearTimeout(scrolling);
// 		scrolling = setTimeout(function() {
// 		    if (event.originalEvent.wheelDelta >= 0) {
// 		        console.log('Scroll up');
// 		    }
// 		    else {
// 		        console.log('Scroll down');
// 		    }
// 		  }, 250);
// 	});
});