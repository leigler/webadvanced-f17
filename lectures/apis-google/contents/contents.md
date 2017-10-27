# [← Web Advanced: Javascript](../../)

# Javascript: APIs and Google Maps


## Table of Contents
- [Google Map API](google)
- [Customizing the Map](customize)
- [Customizing Icons](icons)

## Google Map API {google}

The Google Map Javascript API is not only a practical API, but one that gives you access to one of the most powerful (and [politically dangerous](https://www.theguardian.com/technology/shortcuts/2016/aug/10/google-maps-disputed-territories-palestineishere)) mapping technologies available to the public. 

The Maps API is detailed in its documentation. We will start by using the code given for the &ldquo;basic map&rdquo; (you will also need to generate a custom API Key):
- [Basic Map](https://developers.google.com/maps/documentation/javascript/examples/map-geolocation)
- [Get your API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

You can follow along [here](https://ide.c9.io/eigll343/google-maps-api).

The Maps API consists of a function `initMap(){}` which begins with an new instance of a `google.maps.Map()` (this function defines the position, zoom level, map type, [etc](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions)). In this example we also utilize the HTML5 geolocation method `navigator.geolocation` to determine the user's location (this requires the user's consent).

## Customizing the Map {customize}

You can also easily customize the display of your map: [Customized Map Example]{https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple}.

Within your `initMap` function, create a new `new google.maps.StyledMapType()` in which you can define various properties (a full list can be found [here](https://developers.google.com/maps/documentation/javascript/style-reference)).
