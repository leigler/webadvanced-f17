console.log("Web Advanced: Javascript")


showdown.setOption('customizedHeaderId', true);

var liveURL = 'https://raw.githubusercontent.com/leigler/webadvanced-f17/master/contents/contents.md',
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

		var h3amount = $("h3").length
		$("h3").each(function(){

			var h3index = $( "h3" ).index( this )		

			if (!$(this).next().is("h3")) {
				$(this).nextUntil("h3, h2, h1").wrapAll("<span class='h3-wrapper'></span>")
			 	$(this).wrap("<div class='h3-prepend'></div>")
				$(this).after("<span class='h3-closed'><div id='horizontal'></div><div id='vertical'></div></span>")
				$(this).css({"display" : "inline"})

			}

			if($(this).parent(".h3-prepend").next().next().next().is("h3, h2, h1") || $(this).parent(".h3-prepend").next().next().is("h2, h1") || $(this).parent(".h3-prepend").next().is("h2, h1")){
				$(this).parent(".h3-prepend").next(".h3-wrapper").css({"display" : "block"})
				$(this).next(".h3-closed").remove()
				//var h3content = $(this)
				$(this).css({"display" : "block"})
				$(this).parent(".h3-prepend").replaceWith($(this))
			}


		})
    }
 })).then(function(){

	$("body").css({"opacity" : 1, 
					"transform" : "translateY(0px)"})


	$(".h3-closed").click(function(){

		$(this).parent(".h3-prepend").next(".h3-wrapper").css({"display" : "block"})
		$(this).remove()

	})


})


	