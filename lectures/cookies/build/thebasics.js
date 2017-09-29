console.log("Web Advanced: Javascript")






/* SITE JS: */

showdown.setOption('customizedHeaderId', true);

var liveURL = 'https://raw.githubusercontent.com/leigler/webadvanced-f17/master/lectures/cookies/contents/contents.md',
	testURL = 'contents/contents.md';


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


	
