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

