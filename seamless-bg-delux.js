/*
                   /)           
 _    _  _  ___   //  _  _   _  
/_)__(/_(_(_// (_(/__(/_/_)_/_)_
                                
 ____     ____      
/\  _`\  /\  _`\    
\ \ \L\ \\ \ \L\_\  
 \ \  _ <'\ \ \L_L  
  \ \ \L\ \\ \ \/, \
   \ \____/ \ \____/
    \/___/   \/___/ 
                                     
   /)     /)        
 _(/  _  //    __/  
(_(__(/_(/_(_(_ /(__
               /            
*/



//BACKGROUND RESIZE
$(document).ready(function() {
//make the image act like a background that resizes (similar to css3 "cover" attribute)
        var theWindow        = $(window),
            $bg              = $(".BG_RESIZE_JS img"),
            aspectRatio      = $bg.width() / $bg.height();

        function resizeBg() {

                if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                    $bg
                        .removeClass()
                        .addClass('bgheight');
                } else {
                    $bg
                        .removeClass()
                        .addClass('bgwidth');
                }

        }

        theWindow.resize(function() {
                resizeBg();
        }).trigger("resize");
});



//PARAM CONTROLLED SLIDESHOW
$(document).ready(function() {
	//define the values
	var VALUES = ['slide01', 'slide02', 'slide03', 'slide04'];
	var KEYWORD = 'start';

	//optional debug value
	var DEBUG = 'debug';
	//search the current document url
	var searchString = document.location.search;
	// strip off the leading '?'
	searchString = searchString.substring(1);
	//get values between the '=' 
	var multiple_values = searchString.split("=");		
	//set the vars to compare and validate
	var compare_keyword = multiple_values[0];
	var compare_value = multiple_values[1];
	
	
	
	
		//set the vars to compare and validate
/*	var compare_keyword = multiple_values[0];
	var amp = multiple_values[1];

	var amp_values = amp.split("&");
	
	if (debug_value) {alert(amp_values);}
	
	var compare_value = amp_values[0];
	var amp_value = amp_values[1];
	
*/	
	
	
	
	
	
	

	//check if it matches the KEYWORD variable
	if (compare_keyword == KEYWORD) {
		//set the match as true
		var keyword_match = true;
		//set the var
		var this_keyword = compare_keyword;
	}

	function match_values() {		
		// compare the values of the array with the value from the url
		if (VALUES.indexOf(compare_value) > -1) {
			//set the match as true
			var value_match = true;
			//set the var
			var this_matching_value = compare_value;
			//do something if there's a match
			}
			else {
				//better to define these for debugging
				var value_match = false;
				var this_matching_value = 'no match';
				}
		return [value_match, this_matching_value];
	}
		
	var value_set = match_values();		
	var new_value_match = value_set[0];
	var new_this_matching_value = value_set[1];
	//handoff to slideshow script
	//++++++++++++++++++++++
	
	//||||||||||||||||||||||
	
	//++++++++++++++++++++++
	//begin slideshow script
	//define vars for the slideshow
	//if the params match, set the first slide of the slideshow
	
	if (new_value_match == true && keyword_match == true) {
		//loop through each of the values in the VALUES array
		for (var i=0; i<VALUES.length; i++){
			//if the value is a match, 
			if (new_this_matching_value == VALUES[i]) {
			//set the corresponding slide to first
			$first_slide = $('.SLIDE_ADVANCE_JS img').eq(i);
			}
		}

	} else {		
		//otherwise default to slide one
		$first_slide = $('.SLIDE_ADVANCE_JS img').eq(0);
	}
	//define the rest of the vars
	var $boxes = $(".SLIDE_ADVANCE_JS img"),
	$currentBox = $first_slide.show();		
	
	//default slide rotation interval	
	setInterval(function(){
		$currentBox.fadeOut(300, function(){
			$currentBox = $currentBox.next();
			if (!$currentBox.length) {
           		$currentBox = $boxes.first();
        	}
			$currentBox.fadeIn(200);
		});
	}, 10000);

	//click to next slide
	$('.NEXT_JS').click(function(){
    	$currentBox.fadeOut(300, function() {
       		$currentBox = $currentBox.next();
       		if (!$currentBox.length) {
           		$currentBox = $boxes.first();
       		}
       		$currentBox.fadeIn(200);
    	});
	});	

	//click to previous slide
	$('.PREV_JS').click(function(){
   		$currentBox.fadeOut(300, function() {
       		$currentBox = $currentBox.prev();
       		if (!$currentBox.length) {
           		$currentBox = $boxes.first();
       		}
       		$currentBox.fadeIn(200);
    	});
	});	
	
	//extra credit
/*	$('#BACK_TO_SAMPLES_JS').click(function(){
		//loop through the values array
		for (var i=0; i<VALUES.length; i++){
			//for each matching value
			if (new_this_matching_value == VALUES[i]) {
				//set the back button url to the corresponding project
				var back_url = '/index.html#' + VALUES[i];
				$(this).attr('href', back_url);
			}
		}
	});
*/





	
//end document ready script
});





































