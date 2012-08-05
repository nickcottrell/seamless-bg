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
                    
                    
*/



//BACKGROUND RESIZE
$(document).ready(function() {
//make the image act like a background that resizes (similar to css3 "cover" attribute)
        var theWindow        = $(window),
            $bg              = $(".bg_resize_JS img"),
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


//SLIDESHOW
$(document).ready(function() {
	
	$('.slide_advance_JS img:not(:first)').hide();
	
	var $boxes = $(".slide_advance_JS img"),
    	$currentBox = $boxes.first().show();

 		setInterval(function(){
			$currentBox.fadeOut(300, function(){
				$currentBox = $currentBox.next();
				if (!$currentBox.length) {
            		$currentBox = $boxes.first();
        		}
				$currentBox.fadeIn(200);
			});
		}, 6000);

		$('.next_JS').click(function(){
    		$currentBox.fadeOut(300, function() {
        		$currentBox = $currentBox.next();
        		if (!$currentBox.length) {
            		$currentBox = $boxes.first();
        		}
        		$currentBox.fadeIn(200);
    		});
		});	
		
		$('.prev_JS').click(function(){
    		$currentBox.fadeOut(300, function() {
        		$currentBox = $currentBox.prev();
        		if (!$currentBox.length) {
            		$currentBox = $boxes.first();
        		}
        		$currentBox.fadeIn(200);
    		});
		});	
});















