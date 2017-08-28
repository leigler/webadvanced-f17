showdown.setOption('noHeaderId', true);

showdown.setOption('customizedHeaderId', true);

$.when($.ajax({
	dataType: 'text',
    url: "https://raw.githubusercontent.com/leigler/webadvanced-f17/master/contents/contents.md",
    complete: function(r){

    	var string = r.responseText
    	var converter = new showdown.Converter(),
		text      = string,
		html      = converter.makeHtml(text);

		$( "body" ).append( $( html ) ); //introduce content

		var h3amount = $("h3").length
		$("h3").each(function(){





			var h3index = $( "h3" ).index( this )
			


			

			if (!$(this).next().is("h3")) {
				$(this).nextUntil("h3").wrapAll("<span class='h3-wrapper'></span>")
			 	$(this).wrap("<div class='h3-prepend'></div>")
				$(this).after("<span class='h3-closed'><div id='horizontal'></div><div id='vertical'></div></span>")
				$(this).css({"display" : "inline"})

			}

			if($this.parent(".h3-prepend").next().next().next().is("h3")){
				$(this).parent(".h3-prepend").next(".h3-wrapper").css({"display" : "block"})
				$(this).sibling(".h3-closed").remove()
			}

 			// if(h3index != h3amount -1 && !$(this).next().is("h3")){

			 // 	$(this).nextUntil("h3").wrapAll("<span class='h3-wrapper'></span>")
			 // 	$(this).wrap("<div class='h3-prepend'></div>")
				// $(this).after("<span class='h3-closed'><div id='horizontal'></div><div id='vertical'></div></span>")
				// $(this).css({"display" : "inline"})
				
			 // } 


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


	