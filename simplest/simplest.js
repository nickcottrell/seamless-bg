$(document).ready(function() {

		var searchString = document.location.search;
		var slidenum = searchString.substring(1);
		var images=$('#images img');
		if (slidenum == undefined ){
			var index=0;
		} else {
		    slidenum = slidenum - 1;	
			var index=slidenum;
		}
		images.eq(index).fadeIn(300);
		
		setInterval(playSlides,3400);
		
		//playSlides();

		function playSlides(){
			images.eq(index).fadeIn(100).delay(3000).fadeOut(300);
			index=(index+1) % images.length;
			var nextslide = index;
			var currenturl = document.location.href;
			currenturl = currenturl.split("?");
			currentslide = currenturl[0];
			
			window.history.pushState("?" + currentslide, "Title", "?" + nextslide);			
		};
		
		$('.NEXT').click(function(){
			images.eq(index).fadeOut(300);
			index=(index+1) % images.length;
			var nextslide = index+1;
			var currenturl = document.location.href;
			currenturl = currenturl.split("?");
			currenturl = currenturl[0];
			var refresh = currenturl + "?" + nextslide;
			window.location.href = refresh;			
		});	

		$('.PREV').click(function(){
			images.eq(index).fadeOut(300);
			index=(index-1) % images.length;
			images.eq(index).delay(300).fadeIn(300);
		});	


});





































