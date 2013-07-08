/*
 * The Orbit Slider is icensed under a
 * Creative Commons Attribution-ShareAlike 3.0 Unported License. 
 * 
 * See also http://zurb.com/playground/orbit-jquery-image-slider
 * http://creativecommons.org/licenses/by-sa/3.0/deed.en_US
 * 
 * You can use, distribute and adapt this scripts also for comericial projects
 * 
 * Play fair and leave this copyright infos in the script!
 */

if(!window.console){
    window.console={
        log:function(){}
    }
}

jQuery(document).ready(function(){


    var imgwidth = $('.imgwidth').html();
    var imgheight = $('.imgheight').html();
    var ratio =  imgheight / imgwidth ;

    var width = $('.container').outerWidth()
    //width = width-20;
    var height = width * ratio;
    $('.sliderdimension').css('height', height);
    $('.sliderdimension').css('width', width);
    console.log(width);
   
    $('#featured').orbit({
        animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
        animationSpeed: 1000,                // how fast animtions are
        timer: true, 			 // true or false to have the timer
        resetTimerOnClick: false,           // true resets the timer instead of pausing slideshow progress
        advanceSpeed: 4000, 		 // if timer is enabled, time between transitions
        pauseOnHover: true, 		 // if you hover pauses the slider
        startClockOnMouseOut: true, 	 // if clock should start on MouseOut
        startClockOnMouseOutAfter: 1000, 	 // how long after MouseOut should the timer start again
        directionalNav: false, 		 // manual advancing directional navs
        captions: true, 			 // do you want captions?
        captionAnimation: 'fade', 		 // fade, slideOpen, none
        captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
        bullets: false,			 // true or false to activate the bullet navigation
        bulletThumbs: false,		 // thumbnails for the bullets
        bulletThumbLocation: '',		 // location from this file where thumbs will be
        afterSlideChange: function(){}, 	 // empty function
        fluid: true                         // or set a aspect ratio for content slides (ex: '4x3')
    });

});
 


