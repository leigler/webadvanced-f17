# [← Web Advanced: Javascript](../../)

# Javascript: The Basics

## Table of Contents
- [History](#history)
- [JS Basics](#basics)
- [In Class Example](#example)
- [In Class Exercise](#exercise)


## History {history}
### HTML + CSS
- HTML is a markup language (HyperText Markup Language). this means it is a method of annotating a document (introducing hierarchy through symbols, indentations, etc)
- CSS (Cascading Style Sheets) is a method of determining the presentation of a document written in a markup language.

### Javascript 
Javascript is a programming language. This means it gives websites interactivity (interactivity not only meaning reactionary to a user, but also reactionary towards content, setting, size, etc).

Javascript was designed and written in May of 1995 to syntactically mirror languages like Java. It was originally released by the company _Netscape Communications_ under the name of _LiveScript_. It was quickly renamed _JavaScript_ (which caused some confusion) as a marketing ploy to give it a buzz (according to [Wikipedia](https://en.wikipedia.org/wiki/JavaScript) of course...). 

In 2005, Jesse James Garret coined _Ajax_— a method of creating web applications where data can be loaded in the background, avoiding the need for full page reloads and leading to more dynamic applications. Basically, it allowed for the field of &ldquo;UI/UX&rdquo; to exist (Facebook was founded around the same time— the notion of a web &ldquo;product&rdquo; coincides with this invention).

## Basics {basics}

### Loading your JS

We use the `<script>` tag to connect our HTML page with our JavaScript file as follows: 

`<script type="text/javascript" src="path/file.js"></script>`

We can also include javascript within a script tag: 

`<script type="text/javascript"> var myvar = "your javascript here"; </script>`

![](contents/images/loading-scripts.png)

### Datatypes

There are four primary data types in Javascript. 

string: `"string"`

number: `200`

boolean: `true`

array: `["an", "array", "is", "another", "data type"]`

### Strings

Strings are used to store textual information. 

We can have strings `"in double quotes"` or in `'single quotes'`. The main thing is not to have them `"in mixed quotes'`.

### Quotes in Strings

Invert quote type: 

`"this string can 'say something in quotes' like this"`

Escaped quote type: 

`"this string can \"say something in quotes\" like this"`


### HTML Entities (Unicode)
Unicode is a computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems.

We often use Unicode to represent symbols that aren&rsquo;t (aren`&rsquo;`t) supported by HTML&rsquo;s standard Latin character set.

```javascript
"Mission Asset Fund, which also provides extensive financial counseling and education, markets its lending circles around what it calls &ldquo;financial pain points&rdquo; a security deposit to rent an apartment, the $680 citizenship application fee, the $465 fee for a deportation deferral and a temporary work permit." 
```

`&ldquo; => “`

`&rdquo; => ”`

`&lsquo; => ‘`

`&rsquo; => ’`

### Numbers

Numbers are used to represent numerical data.

Integer: `36`

Float: `1.2345`

### Booleans

Booleans are used to represent a binary value (true or false).

Booleans come as either `true` or `false`

### Arrays

Arrays can be thought of as lists of data types. A collection of information— potentially with mixed values.

The basic format of an array starts with `[`, ends with `]`, and has each value separated by a `,`. Whitespaces are ignored but help with legibility. 

### Array Examples

Empty array: `[]`

Single element: `["one"]`

Multiple elements: `["one", 2, "three", 4.5]`

Array Indexing `[]` + number = index into array

JavaScript is a zero indexed language:

`["red", "white", "blue"][0] => "red"`

`["red", "white", "blue"][1] => "white"`

`["red", "white", "blue"][2] => "blue"`

### Array Details

Array length: `["red", "white", "blue"].length => 3`

Note: First element at zero, last element at one less than array length.

### Variables

Declaration: `var myVariable;` (returns `undefined`)

Assignment: `myVariable = 3;`

Declaration and Assignment: `var myVariable = 3;`

Reassignment: 

`var className = 'Web Advanced'`

`className = 'Web Advanced: Javascript'`

### Console Logging

Console logging is useful to return values and test if your code is working. `console.log` will probably be your #1 javascript debugging tool. 

`console.log("Hello world");`

Console log accepts any variable or data type. Multiple values can be strung together, separated with a comma:

`console.log(myVar, "Hello", 7);`

The Chrome JavaScript Console, accessed via View > Developer > JavaScript Console (or alt+cmd+I):

![](contents/images/console.jpg)

### Relational Operators

Less than: `<`

Greater than: `>`

Less than or equal to: `<=`

Greater than or equal to: `>=`

### Relational Examples

```javascript

1 < 2
// true


2 <= 1
// false


1 <= 1
// true


var myNum = 4;
var altNum = 6;
myNum < altNum
// true


1 > 1
// false

```

### Equality

```javascript
// == data type-converting comparison

2 == 2 // true

3 == 2 // false

"hi" == "hi" // true

"2" == 2 // true

// === strict comparison

"2" === 2 // false

2 === 2 // true


// != not equal (type-converting comparison)

2 != "2" //false

2 != 2 // false

2 != 3 // true

// !== strict comparison

2 !== "2" // true

2 !== 2 // false

2 !== 3 // true

```

### If Statement

```javascript

	if(true){
		// do something
	}

	if(false){
		// do something else
	}

```

### If/else Statement

```javascript

	if(true){
		// do something
	}else {
		// do something else
	}

```


### If/elseif Statement

```javascript

	if(true){

		// do something
	
	}elseif(false) {

		// do something
	
	}else{
		// do something else
	}

```




### And (&&)

```javascript

	var name = "lukas",
		school = "parsons";


	if(name == "lukas" && school == "parsons"){

		console.log("that's me!");
	
	}

```


### Or (||)

```javascript

	var overSixteen = true,
		parentsPresent = false;

	if (overSixteen || parentsPresent) {
	   console.log('Amazing...you can go to an R-rated movie.');
	}

```

### Basic Math

Addition: `1 + 1 = 2`

Subtraction: `1 - 1 = 0`

Multiplication: `5 * 3 = 15`

Division: `10 / 2 = 5`

Order of operations: `(10 + 2)/6 = 2`, `10 + 2/6 = 10.3333334`

Modulus: `4 % 2 = 0`, `5 % 2 = 1` (a modulus gives the remainder— good for determining odds/evens, etc)


### Increment/Decrement (++, --)

Increment:

`myVar = myVar + 1;`

`myVar++;`

Decrement:

`myVar = myVar - 1;`

`myVar--;`


### For Loop

A for loop is used to repeat a sequence of actions (insteading of typing those actions out for each and every possible case).

```javascript

for (var multiplier = 1; multiplier <= 10; multiplier++) {
	var result = multiplier * 6;
	console.log(result);
}

```

### Array Iteration

```javascript
var array = [1, 2, 3];
for (var counter = 0; counter < array.length; counter++) {
   console.log(array[counter]);
}

```


## In Class Examples {example}


### Example 1:
```javascript

var simpleArray = [1,2,3,4,5,6,7,8,9,10]


for (var i = 0; i < simpleArray.length; i++){
	
	if(simpleArray[i] % 2 == 0){
		
		console.log("even: " + simpleArray[i])
	
	} else{
		
		console.log("odd: " + simpleArray[i])
	
	}	
}


```

### Example 2: 

```javascript

var complexArray = ["roses are red", "pipes are lead", "the cat was fed", "i like bread", "i guess i misread"],
	complexArray2 = ["violets are blue", "cows go moo", "lawyers sue", "the homework was due", "dont eat glue"],
	complexArray3 = ["a successful business often has a steady source of revenue", "this poem will have to do", "Jerry Seinfeld Considering Bee Movie 2", "I like memes, how about you?", "would you like your coffee french press or cold brew?"],
	complexArray4 = ["post-Thanksgiving has me feeling overfed", "it's hard to sew when you've run out of thread" , "in England you'll occassionally see an old skinhead", "i swear all of these strings were proofread", "if you search in the forest occassionally you'll find an arrowhead"];

for (var i = 0; i < complexArray.length; i++) {

	if (complexArray[i].length > complexArray2[i].length){	
		console.log(complexArray[i] +  "\n" +  complexArray2[i] + "\n" + complexArray3[i])

	} else{
		console.log(complexArray2[i] + "\n" + complexArray[i] + "\n" + complexArray4[i])
	}

}


```

## In Class Exercise {exercise}

Create two or more arrays of equal length. With a for loop, iterate through your arrays, combining each corresponding array value in an interesting way. Think about the variables you have at your disposal (array values, your for loop counter) and how you can use these to create surprising combinations.

Output your results through the `console.log()`. 





