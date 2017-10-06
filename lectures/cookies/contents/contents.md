# [← Web Advanced: Javascript](../../)

# Javascript: Cookies

## Table of Contents
- [Cookies](#advanced)
- [In-Class Example](#example)

## Javascript Cookies {advanced}

[Cookies](https://en.wikipedia.org/wiki/HTTP_cookie) allow us to store data in the client’s browser. We’re going to use the [JS Cookie library](https://github.com/js-cookie/js-cookie) which gives us an API that works across all browsers.

To follow along on your own laptop, download the [class example](#example).



### Setting a Cookie

```javascript

	Cookies.set('name', 'value');


```

Creates a cookie, valid across the entire site.


### Expiration Date

```javascript

	Cookies.set('name', 'value', { expires: 7 });


```

Creates a cookie that expires 7 days from now. (By default, the cookie is deleted when the browser is closed).


### Reading a Cookie

```javascript
	
	Cookies.get('name'); // => 'value'

	Cookies.get('nothing'); // => undefined


```
Gets the value of a specific cookie. By default, `.get('name')` returns a string.

### Reading All Cookies

```javascript

	Cookies.get(); // => { name: 'value' }

```

Gets the value of all cookies from this site.


### Cookies, Arrays, and Objects


```javascript

	Cookie.set('anArray', ["this", "is", "an", "array"])

	Cookie.set('anObject', { 'foo': 'bar' }) // an object

```
Giving a cookie an array or an object is much like giving it a string.


```javascript

	Cookies.getJSON('anObject'); // returns {foo: 'bar'}

	var theCookieObject = Cookies.getJSON('anObject');

	theCookieObject.foo; //would return 'bar'

```

The object or array is saved in a JSON format (JSON is a text format that is often used to store content). To read a JSON file with javascript, one usually has to run `JSON.parse()` after retrieving the file. Our Cookie.js library takes care of this step. 


### Delete a Cookie

```javascript

	Cookies.remove('name');

```


## In-Class Example {example}

The inclass example can be [found here](contents/example/cookie) and [downloaded here](contents/zip/cookie.zip).

### Install Options

In order to get your cookies to work locally, you will need to run a simple server. 

To do this, you can either run the class example from your cloud9 account, use Mamp, or navigate to your directory via the [terminal](https://github.com/0nn0/terminal-mac-cheatsheet) and run this simple python script `python -m SimpleHTTPServer 8000` (and view your site at http://localhost:8000/).

### Steps

For our in-class example we will create a cookie that, upon each visit, appends a new circle to our DOM.


First we create a container for our circles:

```html

	<div class='circle-container' ></div>

```

We assign css to the class we will give our appended circles:

```css

	.circle{
	    display: inline-block;
	    margin: 10px;
	    width: 40px;
	    height: 40px;
	    border-radius: 20px;
	    background-color: red;
	}		


```




Now the javascript:


Define the circle and its initial array:

```javascript

var allCircles =  [],
	circle     =  '<div class="circle" />';
	

```

Create a conditional to check whether this user already has this cookie:

```javascript

if(Cookies.getJSON('circles')){ // if the cookie already exists


	//do something...		


}else{ // if the cookie doesn't already exist

	allCircles.push(circle); //push the first 'circle' to an array

	Cookies.set('circles', allCircles, {expires: 10}); // set the cookie 'circles', define its value, and its expiration date

}


```

Now lets take a closer look at what happens if the cookie `'circles'` already exists:


```javascript

	if(Cookies.getJSON('circles')){


		// get the contents of the cookie and equate it to a variable:
		var existingCircles = Cookies.getJSON('circles'); 


		/* Now we want to iterate through our retrieved array and output each value */


		/* We also want to append a new value to the cookie's array on each visit (i.e. adding a circle with reach reload) */



	}

```


Iterating through the retrieved array:


```javascript

	if(Cookies.getJSON('circles')){


		// get the contents of the cookie and equate it to a variable:
		var existingCircles = Cookies.getJSON('circles'); 


		/* Now we want to iterate through our retrieved array and output each value */

		for (var i = 0; i < existingCircles.length; i++) { // for loop that appends each circle to the DOM

			$(".circle-container").append(existingCircles[i]); 
		
		}


	}

```


Push a new `circle` to the cookie:

```javascript

	if(Cookies.getJSON('circles')){


		// get the contents of the cookie and equate it to a variable:
		var existingCircles = Cookies.getJSON('circles'); 

		// (for loop goes here)

		/* We also want to append a new value to the cookie's array on each visit (i.e. adding a circle with reach reload) */


		existingCircles.push(circle); //pushes the new circle to the retrieved array

		Cookies.set('circles', existingCircles, { expires: 10}); // resets the cookie with the updated array



	}

```


[Check it out](contents/example/cookie) (the first load should have 0 circles as you&rsquo;re currently declaring the cookie).















