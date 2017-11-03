$(document).ready(function(){

	console.log("RSS - Responsive");

	var statement = "select * from feed where url='http://rss.nytimes.com/services/xml/rss/nyt/Education.xml'";
	$.queryYQL(statement, "json", undefined, function (data) {
	  
	  console.log(data)

	});

})