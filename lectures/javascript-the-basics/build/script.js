console.log("Web Advanced: Javascript")


console.log("\n*********************\n      Example 1:\n*********************")

console.log("\nFor loop output:\n\n")

var simpleArray = [1,2,3,4,5,6,7,8,9,10]


for (var i = 0; i < simpleArray.length; i++){
	
	if(simpleArray[i] % 2 == 0){
		
		console.log("even: " + simpleArray[i])
	
	} else{
		
		console.log("odd: " + simpleArray[i])
	
	}	
} // end of loop

console.log("\n*********************\n      Example 2:\n*********************")
console.log("\nFor loop output:\n\n")

var complexArray = ["roses are red", "pipes are lead", "the cat was fed", "i like bread", "i guess i misread"],
	complexArray2 = ["violets are blue", "cows go moo", "lawyers sue", "the homework was due", "dont eat glue"],
	complexArray3 = ["a successful business often has a steady source of revenue", "this poem will have to do", "Jerry Seinfeld Considering Bee Movie 2", "I like memes, how about you?", "would you like your coffee french press or cold brew?"],
	complexArray4 = ["post-Thanksgiving has me feeling overfed", "it's hard to sew when you've run out of thread" , "in England you'll occassionally see an old skinhead", "i swear all of these strings were proofread", "if you search in the forest occassionally you'll find an arrowhead"];

for (var i = 0; i < complexArray.length; i++) {

	if (complexArray[i].length > complexArray2[i].length){	
		console.log(complexArray[i] +  "\n" +  complexArray2[i] + "\n" + complexArray3[i])

	} else{
		console.log(complexArray2[i] + "\n" + complexArray[i] + "\n" + complexArray4[i])
	}

}



/* SITE JS: */

showdown.setOption('customizedHeaderId', true);

var liveURL = 'https://raw.githubusercontent.com/leigler/webadvanced-f17/master/lectures/javascript-the-basics/contents.md',
	testURL = 'contents/contents.md'

$.when($.ajax({
	dataType: 'text',
    url: testURL, 
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


	