# [← Web Advanced: Javascript](../../)

# Javascript: APIs and YQL


## Table of Contents
- [APIs](#api)
- [What is YQL?](#yql)
- [RSS](#rss)
- [Weather API](#weather)


## APIs {api}
An application program interface (API) is a set of routines, protocols, and tools for building software applications. APIs are used to call and display information (often from a third party) on your website.

## What is YQL? (and why are we using it?) {yql}

Yahoo! Query Language (YQL) is an SQL-like query language created by Yahoo! as part of their Developer Network. YQL is designed to retrieve and manipulate data from APIs through a single Web interface, thus allowing mashups that enable developers to create their own applications.

The following API examples all use a YQL query to return a JSON Object (which we can then handle with javascript and jQuery). While we will be covering the fundamentals of YQL syntax, our emphasis will be more with what we can do with the data we've received.


## RSS {rss}

The live example can be found [here](contents/rss/index.html), with a zip [here](contents/zips/rss.zip)

### [What is RSS?](http://www.whatisrss.com/)

RSS (Rich Site Summary) is a format for delivering regularly changing web content. Many news-related sites, weblogs and other online publishers syndicate their content as an RSS Feed to whoever wants it.

RSS solves a problem for people who regularly use the web. It allows you to easily stay informed by retrieving the latest content from the sites you are interested in. You save time by not needing to visit each site individually. You ensure your privacy, by not needing to join each site's email newsletter. The number of sites offering RSS feeds is	growing rapidly and includes big names like Yahoo News.

### List of RSS feeds

- [National Weather Service](https://www.weather.gov/rss/)
- [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Syndication)
- [New York Times](http://www.nytimes.com/services/xml/rss/index.html)
- [Craigslist](https://www.craigslist.org/about/rss)
- [The New Yorker](https://www.newyorker.com/about/feeds)
- [Elle](http://www.elle.com/about/a50/rss-feeds/)
- [GQ](https://www.gq.com/services/rss/summary)
- [Wired](https://www.wired.com/about/rss_feeds/)
- [Ebay](http://putthison.com/post/33776063854/turn-any-ebay-search-into-an-rss-feed-weve)


### Function

We will be using a jQuery library called [Query YQL](https://github.com/hail2u/jquery.query-yql) that is built off of YQL (Yahoo! Query Language).

As can be seen on the library&rsquo;s site, there are various methods of usage (all depending on the type of query you&rsquo;d like to make).
We&rsquo;ll be using the Query YQL full function:

```javascript


	var statement = "select * from feed where url='http://example.com/rss'"; // here is where you put your url (inside the 'single quotes') This string is actually the YQL syntax
	$.queryYQL(statement, "json", undefined, function (data) { // the query then passes the statement through
	  
		// here you can then manipulate your data (returned as an object):

		console.log(data)

	});



```

### In-Class Example

Getting the New York Times Art & Design RSS Feed: 


```javascript

    var statement = "select * from feed where url='http://rss.nytimes.com/services/xml/rss/nyt/ArtandDesign.xml'"; // here you link the url you need
    $.queryYQL(statement, "json", undefined, function (data) { //function taken from the query-yql library 

      $("#times").append("<h1>The New York Time: Art and Design RSS Feed</h1>") //append title of rss feed
        
        for (var i = 0; i < data.query.results.item.length; i++) { // for each result:
          
        console.log(data.query.results.item[i]) // console log the result's object

        $("#times").append( "<h2>" + data.query.results.item[i].title + "</h2><h3>" + data.query.results.item[i].pubDate + "</h3><p>" + data.query.results.item[i].description + "</p>")

        }

    });


```


## Weather API {weather}

The live example can be found [here](contents/weather/index.html), with a zip [here](contents/zips/weather.zip)

The RSS Feed allows you to fairly simply get content. The Weather query is a bit more complex:

- [Basic YQL SELECT Syntax](#basicsyntax)
- [Getting the weather with YQL](#weatheryql)
- [$.get](#get)
- [Breaking down our query](#breakdown)


### Basic YQL SELECT Syntax {basicsyntax}

TO create a query for the Yahoo! Weather API, we need to use a YQL Select statement. 

The YQL SELECT statement has the following syntax:
```javascript

SELECT what FROM table WHERE filter [| function]

```

The `what` clause contains the fields (columns) to retrieve (we will be using the `*` to select all fields).

The `table` is either the YQL pre-defined or Open Data Table that represents a datasource.

The `filter` is a comparison expression that limits the rows returned.


### Getting the weather with YQL: {weatheryql}

our _select_ is `*` all, and our _from_ is `weather.forcast` (found [here](https://developer.yahoo.com/yql/console/#h=select+*+from+weather.forecast+where+woeid%3D2502265).)


```javascript

function getWeather() {
    var location = "10001";

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");

        } else {
            console.log(data.query.results)
            console.log(data.query.results.channel.astronomy)

            var sunrise = data.query.results.channel.astronomy.sunrise,
                sunriseArray = sunrise.split(" "),
                sunriseTime = sunriseArray[0].split(":"),
                sunriseMinutes = parseInt(sunriseTime[1])/60,
                sunriseHours = parseInt(sunriseTime[0]) + sunriseMinutes,
                sunStart = (sunriseHours/24)*100;

            var sunset = data.query.results.channel.astronomy.sunset,
                sunsetArray = sunset.split(" "),
                sunsetTime = sunsetArray[0].split(":"),
                sunsetMinutes = parseInt(sunsetTime[1])/60,
                sunsetHours = parseInt(sunsetTime[0]) + sunsetMinutes + 12;
                sunEnd = (sunsetHours/24)*100;

            $(".sunrise").css({"left" : sunStart + "vw", "width" : sunEnd - sunStart + "vw"})

            $("h2.sunset-info").append(sunset)
            $("h2.sunrise-info").append(sunrise)

        }

    });
}

getWeather();

```

### $.get {get}

`$.get` is a jQuery shorthand for an Ajax function and allows you to call content from a server. It follows the format: 

```javascript

	$.get( "ajax/test.html", function( data ) {
	  $( ".result" ).html( data );
	  alert( "Load was performed." );
	});

```

Or, more specifically $.get( "the url string you're getting", function(the returned data){ what you're doing with the data you&rsquo;ve gotten})


### Breaking down our query: {breakdown}

```javascript 

'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json'

```

Lets focuse on the `where` filter in our query:

`where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json`

`woeid` is a Yahoo! search identifier that stands for "where on earth identifier" and Yahoo! GeoPlanet uses these as unique identifiers for every item in its system.

To get our woeid, we have subquery: 

`(select woeid from geo.places(1) where text="' + location + '")`

The subquery&rsquo;s `from` in this case is `geo.places()`— a [method](https://developer.yahoo.com/yql/console/#h=select+*+from+geo.places+where+text%3D%22sfo%22) of getting a specific location based on a text query.

Our subquery&rsquo;s `where` then uses a text query with our variable `location`.



