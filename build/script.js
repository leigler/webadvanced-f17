showdown.setOption('customizedHeaderId', true);

$.when($.ajax({
	dataType: 'text',
    url: "https://raw.githubusercontent.com/leigler/webadvanced-f17/master/contents/contents.md",
    complete: function(r){

    	var string = r.responseText
    	var converter = new showdown.Converter(),
		text      = string,
		html      = converter.makeHtml(text);

		$( "body" ).append( $( html ) );
    }
 })).then(function(){

	$("body").css({"opacity" : 1, 
					"transform" : "translateY(0px)"})

})


	