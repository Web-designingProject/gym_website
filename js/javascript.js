$(document).ready(function(){
	$(".centerCircle").mouseenter(function(){
		$(".circles").css({"width":"100%"});
		$(".mini-circle2").css({"padding-top":"20px"});
		$(".aerobicsimg").css({"padding-left":"188px"});
		$(".crossfitimg").css({"padding-left":"186px"});
	});
	
	// BMI CALCULATER
	$(".cal-btn").click(function(){
		var w =document.getElementById('weight').value;
		var h= document.getElementById('height').value;
		
		var y = h/100;
		var total = w /(y*y);
		total = total.toFixed(2);
		$('.result').text(total);
		
	});
	
	// ANIMATION
	new WOW().init();
	$('article').flipcarousel();
	
	$('article').flipcarousel({
itemsperpage : 3, // number of cards to display at once
duration : 500, // flip css transition-duration property in ms
randomizer : 0, // give randomness to card flip delay and duration (0 - 1)
loader : false, // show loader when loading content
arrows : true // arrows for previous/next navigation
});
	
})//function ends...
