# [← Web Advanced: Javascript](../../)

# Javascript: GreenSock and p5.js

## Table of Contents
- [GreenSock](#greensock)
- [p5](#p5)


##[GreenSock Animation Library](https://greensock.com/) {greensock}

Greensock is a javascript-based animation library. It is built to be efficient and smooth, and offers the basis for constructing complex animations. Its animations are frequently tested and often run better than css or jQuery animations. 
Greensock has an active [forum](https://greensock.com/forums/) as well as solid [documentation](https://greensock.com/docs) and [tutorials](https://greensock.com/learning). Below is a brief overview of GreenSock&rsquo;s TweenMax and TimelineMax libraries. 

### Linking
GreenSock uses a variety of packages for various intensities of usage. 
For our introduction, we will be using GreenSock&rsquo;s TweenMax:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>`

and TimelineMax: 

`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TimelineMax.min.js"></script>`
 

### TweenMax

TweenMax is used to animate individual elements.

Each "tween" takes in various constructors following this format:

```javascript

TweenMax.method([element, orSelectionOfElements], [speed], {variables object})

//for example: 

TweenMax.to("#myDiv", 1, {opacity: 0}) // this would fade #myDiv

```
<br>
TweenMax focuses on the beginnings and ends of animations, and has various methods we can use to define each.

`TweenMax.to` targets the end of the animation and is most commonly used. 

`TweenMax.from` targets the beginning of the animation.

`TweenMax.fromTo` targets the beginning and end of the animation and adopts this format: 

`TweenMax.fromTo(#myDiv, 2, {opacity: 0, y: 20}, {opacity: 1, y: 0})` with a vars object defining the beginning (from) and the endpoint of the animation (to).
<br>

The final vars object (in the `{}`) allows for almost any css style. A few examples are below:

```javascript

	{
	 opacity: 0,
	 x: 10, 					// recommended instead of the "left" property, and acts as a css transformation
	 y: 100,					// recommended instead of the "top" property
	 backgroundColor: "red",	// camelCase as javascript doesn't read keys with hyphens
	 scale: 1.1					// scaleX or scaleY for more specific transformations
	}


```
<br>

The vars object `{}` also allows for a variety of special properties:

```javascript
	
	function completeHandler(){
		//do something
	};


	{
	 delay: 4,						// delays animation for 4 seconds
	 ease: Power0.easeOut, 			// custom easing
	 onStart : completeHandler,		// function to start at the beginning of the tween
	 onComplete: completeHandler	// function to fire once the tween has finished

	}


```



### Timeline

Sequencing an increasing collection of elements can be difficult to coordinate with solely the `delay` property. GreenSock uses its TimelineMax to create easier sequencing for more complex animations.

With just TweenMax, a sequence might begin to look like this: 

```javascript

	TweenMax.fromTo("#myDiv", 1, {opacity: 0, y: 10}, {opacity: 1, y: 0}) //fade #myDiv in and up
	TweenMax.fromTo("#myDiv", 1.5, {color: green, x:0 , delay: 1}, {color: red, x: 20}) // turn color from green to red, move 20px to the right
	TweenMax.fromTo("#myDiv", 1, {rotation: 0 , delay: 2.5}, {rotation: 180}) // rotate #myDiv 180 degrees

```

As you may notice, the `delay: ` could become quite difficult to use after a while. The TimelineMax takes care of this: 

```javascript

	var tl = new TimelineMax({repeat:2, repeatDelay:1, yoyo: false}); //define how often you want to repeat the animation
	tl.add( TweenMax.fromTo("#myDiv", 1, {opacity: 0, y: 10}, {opacity: 1, y: 0}) );
	tl.add( TweenMax.fromTo("#myDiv", 1.5, {color: green, x:0}, {color: red, x: 20}) );
	tl.add( TweenMax.fromTo("#myDiv", 1, {rotation: 0}, {rotation: 180}) );
	 
	//then later, control the whole thing
	tl.play();		//begins the animation sequence
	tl.pause(); 	//pauses the animation
	tl.resume(); 	// resumes animation at paused point
	tl.seek(1.5);	// jumps to 1.5 seconds into the animation
	tl.reverse();	// plays the animation backwards



```
TimelineMax simplifies the process and offers an opportunity to use methods like `pause()`, `play()`, `resume()`, `reverse()`.


### [GreenSock Cheatsheet](https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf)

## [P5.js](https://p5js.org/) {p5}


### Linking

You can link to the p5.js library at:

 `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>`


### Basic Example

The basic example offered by p5.js is:

```javascript

	function setup() {
	  createCanvas(640, 480);
	}

	function draw() {
	  if (mouseIsPressed) {
	    fill(0);
	  } else {
	    fill(255);
	  }
	  ellipse(mouseX, mouseY, 80, 80);
	}


```

Above you'll notice two distinct functions. The `setup()` function prepares the canvas and static elements. p5&rsquo;s `draw()` function acts as the animation function where the majority of your code will fall.

p5.js defaults to a 100x100 canvas. `createCanvas()` allows you to define a more specific `<canvas></canvas>` element. As is outlined in the Reference section, your `canvas` element can also be stylized in your css. 

Within the `draw()` function you&rsquo;ll notice the `mouseIsPressed`. As the `draw()` function is constantly running, this [boolean variable](https://p5js.org/reference/#p5/mouseIsPressed) is updated when you&rsquo;ve pressed your mouse (). Alternatively, `mouseIsPressed()` [exists as a function](https://p5js.org/reference/#p5/mousePressed) as well.

In this particular example, `fill()` [references](https://p5js.org/reference/#/p5/fill) the ellipse at hand. To target specific shapes, `fill()` must be redefined before each shape:

```javascript

	fill(#00f); //applies to the rectangle below
	rect(0, 10, 45, 80);

	fill(#0ff); //redefined to apply to this rectactangle
	rect(55, 10, 45, 80); 

```


`mouseX` and `mouseY` both correspond respectively to the active mouse coordinates (remember, the `draw()` functions is looping so these are constantly updated).

`ellipse()`, `rect()`, and other shapes can have their size and coordinates specified relative to the canvas element.  


### Reference

p5.js outlines a helpful overview of what falls into each respective core function [here](https://github.com/processing/p5.js/wiki/p5.js-overview) (This page also includes detailed notes on how to achieve proper responsive canvas sizes and mouse/touch interactions).

p5.js also has an in-depth [Reference](https://p5js.org/reference/) list for all of its functions and native variables, as well as [extension libraries](https://p5js.org/libraries/) that allow you to interface with sound, the DOM, language, and game-like environments. 


