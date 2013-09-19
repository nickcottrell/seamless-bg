//BACKGROUND RESIZE
$(document).ready(function() {
//make the image act like a background that resizes (similar to css3 "cover" attribute)
        
		//define stuff
		var THE_WINDOW		= $(window),
            $BG				= $(".BG_RESIZE_JS img"),
            ASPECT_RATIO	= $BG.width() / $BG.height();

		
		//define the resize function
		function resizeBg() {
			//if the aspect ratio of the window is less than the aspect ratio of the image
			if ( (THE_WINDOW.width() / THE_WINDOW.height()) < ASPECT_RATIO ) {
				//add the css class to the height (that is set to 100% in the css)
				$BG.removeClass().addClass('bgheight');
			} else {
				//otherwise, add the css class to the width (that is set to 100% in the css)
				$BG.removeClass().addClass('bgwidth');
			}
		}
		
		
		//do the function when the window is being re-sized
		THE_WINDOW.resize(function() {
			resizeBg();
			}).trigger("resize");
});





$(document).ready(function() {

		var searchString = document.location.search;
		var currenturl = searchString.split("&");
		var slide_control = currenturl[0];
		slide_control = slide_control.split("=");
		slide_control = slide_control[1];
		var play_control = currenturl[1];
		play_control = play_control.split("=");
		play_control = play_control[1];		

		var images=$('.SLIDE_ADVANCE_JS img');

		if (slide_control === undefined ) {
		var index=0;
		} else {
 		var index=slide_control-1;
		}
	
		images.eq(index).fadeIn(100);

		if (play_control === undefined ) {
		setInterval(playSlides,3400);
		} else if (play_control == "play"){
		setInterval(playSlides,3400);
		} else if (play_control == "pause"){
			// do nothing
		}
		
		function playSlides(){
			images.eq(index).fadeIn(100).delay(3000).fadeOut(200);
			index=(index+1) % images.length;
			window.history.pushState("?slide=" + index-1 + "&control=" + play_control, "Title", "?slide=" + index + "&control=" + play_control);
		};
		
		$('.NEXT_JS').click(function(){
			images.eq(index).fadeOut(200);
			index=(index+1) % images.length;
			var nextslide = index+1;
			var currenturl = document.location.href;
			currenturl = currenturl.split("?");
			currenturl = currenturl[0];
			var refresh = currenturl + "?slide=" + nextslide + "&control=" + play_control;
			window.location.href = refresh;			
		});	

		$('.PREV_JS').click(function(){
			images.eq(index).fadeOut(200);
			index=(index) % images.length;
			var prevslide = index;
			var currenturl = document.location.href;
			currenturl = currenturl.split("?");
			currenturl = currenturl[0];
			var refresh = currenturl + "?slide=" + prevslide + "&control=" + play_control;
			window.location.href = refresh;	
		});
		
		$('.PAUSE_JS').click(function(){
			images.eq(index).fadeOut(200);
			var currenturl = document.location.href;
			currenturl = currenturl.split("&");
			var refresh = currenturl[0] + "&control=pause";
			window.location.href = refresh;	
		});	

		$('.PLAY_JS').click(function(){
			images.eq(index).fadeOut(200);
			var currenturl = document.location.href;
			currenturl = currenturl.split("&");
			var refresh = currenturl[0] + "&control=play";
			window.location.href = refresh;		
		});			


});





































