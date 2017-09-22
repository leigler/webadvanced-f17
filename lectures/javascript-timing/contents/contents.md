# [← Web Advanced: Javascript](../../)

# Javascript: Timing and Randomness

## Table of Contents
- [JS Timing](#timing)
- [In Class Example](#example)
- [In Class Exercise](#exercise)

## JS Timing {timing}

### While Loop

A while loop continues until its conditional is no longer true.

```javascript

var i = 0;

while (i < 10) {
    console.log("The number is " + i);
    i++;
}


```

### Delaying Events

Set Timeout allows us to delay the execution of a function for a specific number of milliseconds.

```javascript

setTimeout(function(){ 
    console.log("Hello World"); 
}, 3000);

```

(The example above waits 3 seconds prior to running the console log.)

### Javascript Math object

The javascript Math object&#42; allows you to perform mathematical tasks on numbers.

&#42;javascript&rsquo;s Math object is a built-in object that has properties and methods for mathematical constants and functions. Not a function object (we will go over what objects are in a later lecture).

### Random Method

`Math.random();`

Generates a random number between 0 and 1.

In order to generate a random number between 0 and 10:

`Math.random() * 10`


### Rounding Method

`Math.round(3.7);`

Rounds input to nearest integer, in this case 4.

`Math.ceil(8.3);`

Rounds up to the smallest integer greater than or equal to our input, in this case 9.

`Math.floor(8.3)`

Rounds down to the largest integer less than or equal to our input, in this case 8.

In order to generate a random integer between 0 and 10:

`Math.floor(Math.random() * 10)`


### Timing Console Log

We can use Set Timeout in conjunction with our loop to time our console.log events:

```javascript

var timer = 0;
var counter = 0;

for (var i = 0; i < 10; i++) {
    setTimeout(function(){ 
        console.log("Hello World " + Math.random()*5);

        console.log(counter) // allows you to iterate through the setTimeOut method
        
        counter++;

    }, timer);
    timer += 100;
    
}


```





## In Class Example {example}

New York winter: a combination of 💧 and ❄ :



```javascript

var snowTimer = 0; //declare our timer for setTimeout


for (var i = 0; i < 200; i++) { //standard for loop to iterate for 200 console lines
    setTimeout(function() { // introduce the setTimout function
        var snow = ""; //empty string that will be filled below!
        
        for (var s = 0; s < 40; s++) { //for loop stating 40 characters per line

        	var snowOrRain = Math.random()*100; 
        	// use snowOrRain to determine what combination of ❄, 💧, and " " each line has
            if (snowOrRain < 33) {
                snow += "❄️"; //add snow to string
            }else if (snowOrRain > 33 && snowOrRain < 66){
            	snow += "💧"; //add rain to string
            }else {
                snow += " "; //add space to string
            }
    
        }
        console.log(snow); //output of snow string
    }, snowTimer); // snowTimer determines when the sleet string is released
    snowTimer += 70; // in order to "animate", each sleet string is released +70 milliseconds after the previous one.
} 


```


## In Class Exercise {exercise}

Copy the in class example. Use a combination of [emojis](https://emojipedia.org/) to quickly create your own animated scene (how would we animate a car race🏎️🚗🚓🚚🚛? a growing forest🌱🌿🌳🌲? a swarm of bees🐝🐝🐝?). 



