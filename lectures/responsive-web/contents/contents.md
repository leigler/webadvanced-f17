# [← Web Advanced: Javascript](../../)

# Responsive Web


## Table of Contents
- [Responsive CSS Units](#units)
- [CSS Media Queries](#queries)
- [Javascript and Responsiveness](#js)
- [In-Class Assignment](#inclass)


## Responsive CSS Units {units}

Many CSS attributes use units to define their size. Most commonly, you&rsquo;ll find the `px` and `%` units:
<br><br>
<div style="background-color: blue; color: white; position: relative; width: 100px; height: 100px; margin: 0 auto; box-sizing: border-box; padding: 5px;">width: 100px height: 100px</div>
<br>
<div style="background-color: blue; color: white; position: relative; width: 50%; height: 100%; margin: 0 auto; box-sizing: border-box; padding: 5px;">width: 50% height: 100%</div>
<br><br>
As you may notice, the `%` unit is responsive, while the `px` unit is not. 

- `px` renders as pixels
- `%` renders as a percentage of its parent (if its parent has a defined dimension) or as a reflection of its content. 

CSS includes additional units including `vw` and `vh`, as well as `em` and `rem`.
<br><br>
<div style="background-color: blue; color: white; position: relative; width: 50vw; height: 100vh; margin: 0 auto; box-sizing: border-box; padding: 5px;">width: 50vw height: 100vh</div>
<br>
<div style="background-color: blue; color: white; position: relative; font-size: 20px; width: 20em; height: 20em; margin: 0 auto; box-sizing: border-box; padding: 5px;">font-size: 20px<br> width: 20em height: 20em</div>
<br>
<div style="background-color: blue; color: white; position: relative; width: 20rem; height: 20rem; margin: 0 auto; box-sizing: border-box; padding: 5px;">width: 20rem height: 20rem</div>
<br><br>
- `vw` stands for "view width" and is always in direct relation to the browser&rsquo;s viewport width (i.e. how wide is your browser?)
- `vh` stands for "view height" and is always in direct relation to the browser&rsquo;s viewport height (i.e. how tall is your browser?)
- `em` is a proportion of an element&rsquo;s font-size (i.e. if the element&rsquo;s `font-size: 20px;`, then the `2em` is equal to `40px;`)
- `rem` is more universal than `em` and is relative to font-size of the root element (i.e. if the `html` is given a `font-size: 15px;`, then `2rem` will be `30px`).


## CSS Media Queries {queries}

CSS Media Queries are defined with the `@media` notation. 

`@media` is used to define different style rules for different media types/devices.

For example: 
```css

  .media-query{
    position: relative;
    height: 200px;
    width: 800px;
    margin: 0 auto;
    background-color: blue;
    color: white;
    box-sizing: border-box;
    padding: 5px;
  }


  @media (max-width: 801px){

    .media-query{
      width: 600px;
      background-color: red;
    }

  }

  @media (max-width: 601px){

    .media-query{
      width: 400px;
      background-color: cyan;
    }

  }

```
<br><br>
<div class="media-query">.media-query div</div>
<br><br>

The `@media` notation full syntax looks like this: 

```css

/* SYNTAX OUTLINE */ 
@media not|only mediatype and (media feature) {
    CSS-Code;
}

/* MEDIATYPES 

- all
- print (for printers)
- screen (Used for computer screens, tablets, smart-phones etc.)
- speech

*/


/* EXAMPLES */

@media only screen and (max-width: 900px) {
    /* for screens under 900px */
}

@media (hover: 1) {
    /* for all screens that support hover (i.e. no touch) */
}

```



## Javascript and Responsiveness {js}

Here are two easy Javascript methods for detecting device sizes and types:

Vanilla Javascript method: 
```javascript

if (window.matchMedia("(min-width: 400px)").matches) {
  /* the viewport is at least 400 pixels wide */
} else {
  /* the viewport is less than 400 pixels wide */
}


```

jQuery method: 

```javascript

if($(window).outerWidth() < 900){
	
	/* the viewport is at least 900 pixels wide */

}else{

	/* the viewport is less than 900 pixels wide */

}


```

jQuery also has a function that can fire on resize: 

```javascript

	$( window ).resize(function() {
	 
	  console.log("resized!")
	
	});

```

For more specific browser support detection, you can also use libraries like [Modernizr](https://modernizr.com/).


## In-Class Assignment {inclass}

For today&rsquo;s assignment, use an RSS Feed as content for a responsive website. Please upload your site to your github index.

Your boilerplate can be downloaded [here](contents/responsive-boilerplate.zip).


