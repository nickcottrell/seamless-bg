$(document).ready(function() {

		var searchString = document.location.search;
		var currenturl = searchString.split("&");
		var slide_control = currenturl[0];
		slide_control = slide_control.split("=");
		slide_control = slide_control[1];
		var play_control = currenturl[1];
		play_control = play_control.split("=");
		play_control = play_control[1];		

		var images=$('#images img');

		if (slide_control === undefined ) {
		var index=0;
		} else {
 		var index=slide_control-1;
		}
	
		images.eq(index).fadeIn(200);

		if (play_control === undefined ) {
		setInterval(playSlides,1400);
		} else if (play_control == "play"){
		setInterval(playSlides,1400);
		} else if (play_control == "pause"){
			// do nothing
		}
		
		function playSlides(){
			images.eq(index).fadeIn(200).delay(1000).fadeOut(300);
			index=(index+1) % images.length;
			window.history.pushState("?slide=" + index-1 + "&control=" + play_control, "Title", "?slide=" + index + "&control=" + play_control);
		};
		
		$('.NEXT').click(function(){
			images.eq(index).fadeOut(300);
			index=(index+1) % images.length;
			var nextslide = index+1;
			var currenturl = document.location.href;
			currenturl = currenturl.split("?");
			currenturl = currenturl[0];
			var refresh = currenturl + "?slide=" + nextslide + "&control=" + play_control;
			window.location.href = refresh;			
		});	

		$('.PREV').click(function(){
			images.eq(index).fadeOut(300);
			index=(index) % images.length;
			var prevslide = index;
			var currenturl = document.location.href;
			currenturl = currenturl.split("?");
			currenturl = currenturl[0];
			var refresh = currenturl + "?slide=" + prevslide + "&control=" + play_control;
			window.location.href = refresh;	
		});
		
		$('.PAUSE').click(function(){
			images.eq(index).fadeOut(300);
			var currenturl = document.location.href;
			currenturl = currenturl.split("&");
			var refresh = currenturl[0] + "&control=pause";
			window.location.href = refresh;	
		});	

		$('.PLAY').click(function(){
			images.eq(index).fadeOut(300);
			var currenturl = document.location.href;
			currenturl = currenturl.split("&");
			var refresh = currenturl[0] + "&control=play";
			window.location.href = refresh;		
		});			


});





































