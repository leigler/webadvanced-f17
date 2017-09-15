console.log("Web Advanced: Javascript")


console.log("\n")
console.log("Math.random(): ", Math.random())


console.log("\n")
console.log("Math.random() between 1 and 10: ", Math.floor( Math.random() * 10))

console.log("\n")
console.log("\n")




console.log("Console Log Timing:")

var demoTimer = 0;
var demoCounter = 0;

for (var i = 0; i < 10; i++) {
    setTimeout(function(){ 
        console.log("Hello World " + Math.random()*5); 
    }, demoTimer);
    demoTimer += 100;
    demoCounter++;
}



var snowTimer = 0;
setTimeout(function(){

console.log("\n")
console.log("\n")

console.log("In Class Example (NY Winter):")

for (var i = 0; i < 200; i++) {
    setTimeout(function() {
        var snow = "";
        for (var s = 0; s < 40; s++) {

        	var snowOrRain = Math.random()*100;

            if (snowOrRain < 33) {
                snow += "❄️";
            }else if (snowOrRain > 33 && snowOrRain < 66){
            	snow += "💧";
            }else {
                snow += " ";
            }
    
        }
        console.log(snow);
    }, snowTimer);
    snowTimer += 70;
 
}

}, 10000)





/* SITE JS: */

showdown.setOption('customizedHeaderId', true);

var liveURL = 'https://raw.githubusercontent.com/leigler/webadvanced-f17/master/lectures/javascript-timing/contents/contents.md',
	testURL = 'contents/contents.md';


$.when($.ajax({
	dataType: 'text',
    url: liveURL, 
    complete: function(r){

    	/*
			url for testing: 
			url for live: 
    	*/

    	var string = r.responseText
    	var converter = new showdown.Converter(),
		text      = string,
		html      = converter.makeHtml(text);

		$( "body" ).append( $( html ) ); //introduce content
		$('pre code').each(function(i, block) {
	   	 hljs.highlightBlock(block);
		});
		
    }
 })).then(function(){

	$("body").css({"opacity" : 1, 
					"transform" : "translateY(0px)"})




})


	
