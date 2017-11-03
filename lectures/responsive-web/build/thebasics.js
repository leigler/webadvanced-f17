console.log("Web Advanced: Javascript")


/* SITE JS: */

showdown.setOption('customizedHeaderId', true);

var liveURL = 'https://raw.githubusercontent.com/leigler/webadvanced-f17/master/lectures/responsive-web/contents/contents.md',
	testURL = 'contents/contents.md';


$.when($.ajax({
	dataType: 'text',
    url: liveURL, 
    complete: function(r){

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


	
