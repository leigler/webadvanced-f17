$(document).ready(function(){

console.log("🍪   🍪   🍪   🍪   🍪   🍪   🍪  🍪   🍪   🍪   🍪\n🍪   🍪   🍪   🍪   JS Cookies   🍪   🍪   🍪   🍪\n🍪   🍪   🍪   🍪   🍪   🍪   🍪  🍪   🍪   🍪   🍪")


//.circle-container

var allCircles =  [],
	circle     =  '<div class="circle" />';


if(Cookies.getJSON('circles')){ // if the cookie already exists

	var existingCircles = Cookies.getJSON('circles');

	for (var i = 0; i < existingCircles.length; i++) { // for loop that appends each circle
	
		$(".circle-container").append(existingCircles[i]); 
	
	}

	existingCircles.push(circle);

	Cookies.set('circles', existingCircles, { expires: 10});
		


}else{ // if the cookie doesn't already exist

	allCircles.push(circle);

	Cookies.set('circles', allCircles, {expires: 10});

}





})