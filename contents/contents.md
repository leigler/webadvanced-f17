# Web Advanced: Javascript

This course will focus on extending students’ knowledge of code to web and cloud. Students will be learning JavaScript, the programming language of the Web. Students will be introduced to a variety of applications from user interactions, dynamic content organization, APIs, and the creation of desktop and mobile applications. We will look critically at the medium of software, dive into the cultural literature of web design, explore research and learning techniques, and develop a strong understanding for contemporary workflows and processes.
<br><br>
Friday 12:10 p.m. — 2:50 p.m. <br>Parsons 2 W 13th, Rm. 403

eigll343@newschool.edu

## Table of Contents

- [Class Syllabus](contents/pdfs/PSAM_3210_A_EIGLER-HARDING_FA17.pdf)
- [Schedule](#schedule)
- [Projects](#projects) 
- [Lectures](#lectures)
- [Students](#students)
- [Resources](#resources)
- [Readings](#readings)


## Schedule {schedule}

### Sept 1
In-Class
- Introductions
- Syllabus Review
- HTML + CSS check-in
- [github introduction/setup](https://docs.google.com/document/d/13w9SX8muVx_S_O68CkwPbYQyXs6xS_NiDVACYuKNBqg/)

Assignment
- [Homepage](#homepage)
- Become comfortable with working in Cloud9

### Sept 8
In-Class
- Review Homepage
- [Javascript: The Basics](lectures/javascript-the-basics)
- in-class exercise

Assignment
- [Hidden Pattern (pt. 1)](#pattern) + Accompanied Reading

### Sept 15
In-Class
- [Javascript: Timing and Randomness](/lectures/javascript-timing)
- in-class exercise
- Review Hidden Pattern (pt. 1)

Assignment
- [Hidden Pattern (pt. 2)](#patternpart2)

### Sept 22
In-Class
- [Javascript: Advanced and JQuery](/lectures/javascript-advanced)
- in-class exercise
- Review Hidden Pattern (pt. 2)

Assignment
- [Hidden Pattern (interface)](#patternpart3)

### Sept 29
In-Class
- Javascript and jQuery recap
- [JS Libraries](/lectures/libraries)
- in-class exercise (JS Libraries)
- Review Hidden Pattern (interface) in groups

Assignment
- [Hidden Pattern (final form)](#patternpart4)

### Oct 6
In-Class
- Hidden Pattern Critique
- [JS Cookies Lecture](/lectures/cookies)
- In-class exercise
- _Loop_ introduction

Assignment
- [Loop (Sketches)](#looppart1)

### Oct 13
In-Class
- Work Session with [JS Libraries: p5.js and Greensock](/lectures/libraries2)
- Individual Meetings

Assignment
- [Loop (Live Sketches)](#looppart2)

### Oct 20
In-Class
- [Intro to APIs](/lectures/apis)
- Class Review of Live Sketches

Assignment
- [Loop (Prototype)](#looppart3)

### Oct 27
In-Class
- Loop Check-in
- Loop Individual Critiques + Work Session

Assignment
- [Loop (Final)](#looppart4)

### Nov 3
In-Class
- Review APIs and RSS Feeds
- [Google Maps API](/lectures/apis-google)
- [Responsive Web Lecture](/lectures/responsive-web)
- In-Class Assignment
- Introduction of Final Project

Assignment
- [Loop (Final)](#looppart5)
- [Final Project (Sketches)](#final)

### Nov 10
### Nov 17
### Nov 24 ([🦃](https://en.wikipedia.org/wiki/Thanksgiving)— no class)
### Dec 1
### Dec 8
### Dec 15


## Projects {projects}

### 1. Homepage {homepage}
#### (Due Sept 8)
Your first assignment will have two key elements: _Index_ and _Hello, world_. 

_Index_: Take the github page that you set up in today’s class and convert it into a living index of your work over this semester.  Think about how this index will grow (is it a list of text-based hyperlinks? photos? patterns?, does each link look different than the next? What underlying system dictates how the page is formatted?).

_Hello, world_: For the first link on your index, design and program a [_hello, world_](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) site. Find a piece of content whose copyright has expired, or that is under a creative commons license (resources include [ubuweb](http://www.ubu.com/), [archive.org](https://archive.org/), and [Encyclopédie Diderot](https://quod.lib.umich.edu/d/did/)).  This content should somehow be meaningful to you. Using your knowledge of HTML and CSS (and Javascript 🙃), design and program a re-publishing/remixing/re-interpreting of your content  that communicates your perspective and why you find this piece meaningful. This site should be multi-paged.

Readings
- [Vernacular Web 2](http://contemporary-home-computing.org/vernacular-web-2/) by Olia Lialina

References
- [Y0UNG-HAE CHANG HEAVY INDUSTRIES](http://www.yhchang.com/)
- [I'm Google](http://dinakelberman.tumblr.com/)
- [My Boyfriend Came Back From the War](http://www.teleportacia.org/war/)


### 2a. Hidden Pattern Part 1{pattern}
#### (Due Sept 15) 
Write a JavaScript program which uses loops and if statements to create a pattern in the Chrome Console. Consider how the program might change as it iterates through an array or number of increasing value. Attach your JavaScript program to an HTML page and post it to your GitHub repository prior to our next meeting. 

Questions to consider include:
- what properties can you see that can be utilized? what characters will you use? 
- how does each isolated line (or even character) change when placed into the context of the pattern?
- how does the pattern repeat? does it repeat?

Readings
- [What is Code?](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/) Paul Ford

References
- [Console Falling Game](http://rikukissa.github.io/falling/)
- [Console Image](http://ohgyun.github.io/console-text-image/example/example.html)
- [Cheet.js](http://lou.wtf/cheet.js/) to activate basic motions
- [Styling the Console](https://konklone.com/post/how-to-hack-the-developer-console-to-be-needlessly-interactive) for how to use (limited) css in the console.

### 2b. Hidden Pattern Part 2 {patternpart2}
#### (Due Sept 22)
For part 2 of the Hidden Pattern assignment, revisit your console-based javascript program. Animate your pattern using javascript&rsquo;s setTimeout method and consider the feedback you received in class. Especially now that you&rsquo;re introducing movement, think about your pattern&rsquo;s narrative arc and how the pattern unfolds overtime in the browser&rsquo;s console. 

Questions to Consider
- With what pace does your pattern reveal itself?
- What variables can influence your setTimeout method?
- Are there elements that stay the same? If so, what do they offer to the rest of the pattern?
- Is your pattern abstract? recognizable? Can it shift between the two?
- Does your pattern end? If so, how does it end?

Further References
- [The Source](http://www.coryarcangel.com/downloads/the-source-pizza-party-2013-138-digital-master-ih.pdf) by Cory Arcangel
- [Nicolas Sassoon&rsquo;s immersive web drawings](http://nicolassassoon.com/)
- [Geogoo by JODI](http://geogoo.net/)

### 2c. Hidden Pattern Interface {patternpart3}
#### (Due Sept 29)
For the third week of your Hidden Pattern assignment you will create a context for your javascript console pattern. Using your knowledge of HTML and CSS, and your new knowledge of javascript&rsquo;s ability to manipulate the DOM, design and develop a responsive interface for your pattern. 

Questions to Consider
- How does your interface prepare the user of your site for your pattern?
- How does the interface on your site respond to the opening of the console?
- How does your pattern respond to your interface? 

### 2d. Hidden Pattern Final Revisions {patternpart4}
#### (Due Oct 6)
Take the feedback your classmates gave you this week to finalize your Hidden Pattern. 


### 3a. Loop {looppart1}
#### (Due Oct 13)
Using your knowledge of Javascript so far, design and develop a single-serve website that utilizes cookies. Using at least one non-standard input (i.e. other than a mouse click), this website should exhibit a narrative loop in which the end-user feels like they are progressing despite engaging in a (endlessly looping) pattern of action. 

For next week, come in with several single-serve sketches that illustrate the narrative loop you intend to exhibit. 

Readings
- [Over the Bridge](http://digital-strategies.ma-ad.ch/article/overthebridge/) by Rob Giampietro
- [The Garden of Forking Paths](http://www.coldbacon.com/writing/borges-garden.html#_jmp0_) by Jorge Luis Borges


### 3b. Loop (Live Sketches) {looppart2}
#### (Due Oct 20)
Begin to code the static sketches you brought in today. Use this week to experiment with different ways to build your sketches, and focus on harnessing the core interaction. Once you&rsquo;ve built some sketches, let others try the site out— get feedback and listen to what you can improve.
For next week, code two of your sketches— while they can be rough around the edges, we will want to test them out to give proper feedback.

Readings
- [isthisyourpaperonsingleservingsites.com](http://isthisyourpaperonsingleservingsites.com/)

Reference Sites
- [sometimesredsometimesblue.com/](http://sometimesredsometimesblue.com/)
- [whatcoloristheempirestatebuilding.com/](http://whatcoloristheempirestatebuilding.com/)
- [www.howmanypeopleareinspacerightnow.com/](http://www.howmanypeopleareinspacerightnow.com/)
- [Race Condition](http://race-condition.net/) by Jonas Lund
- [Wishing Well](http://wishingwell.biz/) by Jonas Lund
- [WYSIWYG.net](http://whatyouseeiswhatyouget.net/) by Jonas Lund
- [Over and Over Again](http://overandoveragain.net/) by Jonas Lund
- [wwwwwwwwwwwwww.net/](http://wwwwwwwwwwwwww.net/) by Jonas Lund
- [Rafaël Rozendaal](http://www.newrafael.com/websites/)
- [Geogoo by JODI](http://geogoo.net/)
- [clickclickclick.click](https://clickclickclick.click)

### 3c. Loop (Prototype) {looppart3}
#### (Due Oct 27)
Based on our group discussion in class today, continue to develop your project out it in full. 
For next week you should have a working prototype.


### 3d. Loop () {looppart4}
Take the feedback from today&rsquo;s class and finalize your Loop Project.

### 3e. Loop (Final) {looppart5}
Finalize your project and prepare for next week&rsquo;s critique.

### 4. Final Project {final}
For this assignment you will be making an interactive and living website with at least one API and a secondary source of content (either static or an additional API). You may use any of the APIs we went over in class or one from your own research. Think carefully about how you contextualize and combine your content and what kind of interactions you supply the end-user with. How might the pairing of your selected content reveal new meaning? How does the website react to the API over time? What do the type of user interactions imply about your perspective?

Requirements
- Uses at least one API
- Contains at least two content types
- Is responsive (works on desktop and mobile)
- Changes over time

References
- [Uncreative Writing](contents/pdfs/Kenneth-Goldsmith_uncreative-writing.pdf) by Kenneth Goldsmith (founder of [ubu.com](http://ubu.com/))
- [Racter: Policemans Beard is Half Constructed ](contents/pdfs/RACTER_Policemans-Beard.pdf)
- [Dispersion](contents/pdfs/Dispersion2016.pdf) by Seth Price


## Lectures {lectures}

- [Javascript: The Basics](/lectures/javascript-the-basics)
- [Javascript: Timing and Randomness](/lectures/javascript-timing)
- [Javascript: Advanced and JQuery](/lectures/javascript-advanced)
- [Javascript: Libraries pt. 1](/lectures/libraries)
- [Javascript: Cookies](/lectures/cookies)
- [JS Libraries: p5.js and Greensock](/lectures/libraries2)
- [Intro to APIs](/lectures/apis)
- [Google Maps API](/lectures/apis-google)
- [Responsive Web](/lectures/responsive-web)

## Students {students}

- [Connie Chu](https://chuc555.github.io/)
- [Emily Frank](https://frane528.github.io/webadvanced/index.html)
- [Mollie Gold](https://molliegold.github.io/webadvanced/)
- [Esther Klingbiel](https://estherklingbiel.github.io/webadvanced.github.io/homepage/)
- [Julia Lassen](https://lassj993.github.io/web-advanced/)
- [Tiffany Lee](https://tiffanyvlee.github.io/webadvanced/)
- [Tina Li](https://tinayanli.github.io/webadvanced/index.html)
- [Elaine Matthias](https://elainem.github.io/)
- [Kaisha Murzamadiyeva](https://murzk035.github.io/)
- [Jack Rieger](https://riegj814.github.io/)
- [Yuqi Wang](http://www.yuqiwang.graphics/web-advanced/)
- [Blair Zhang](https://blairyuezhang.github.io/web_advanced/)


## Resources {resources}
Software
- [Sublime Text Editor](https://www.sublimetext.com/)
- [Github](https://github.com/)
- [Github tutorial](https://www.atlassian.com/git)
- [Cyberduck](https://cyberduck.io/)

Programming
- [Mozilla](https://developer.mozilla.org/en-US/), [Stackoverflow.com](https://stackoverflow.com/), [W3 Schools](https://www.w3schools.com/)
- [JQuery](http://jquery.com/)
- [CodeAcademy— Javascript](https://www.codecademy.com/learn/learn-javascript)
- [CodeAcademy— JQuery](https://www.codecademy.com/learn/jquery)
- [Eloquent Javascript PDF](http://eloquentjavascript.net/)
- [Learn CSS](http://learnlayout.com/)

Fonts & Open Source
- [fonts.google](https://fonts.google.com/)
- [use modify](http://usemodify.com/)
- [velvetyne libre foundry](http://www.velvetyne.fr/)
- [open foundry](http://open-foundry.com/hot30)

## Readings {readings}
- [What is Code?](https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/), Paul Ford
- [The Source](http://www.coryarcangel.com/downloads/the-source-pizza-party-2013-138-digital-master-ih.pdf), Cory Arcangel
- [Reversing the flow of Internet Expansion](http://extinct.ly/participants/#kev-bewersdorf), Kevin Bewersdorf
- [Why no one clicked on the great hypertext story](https://www.wired.com/2013/04/hypertext/), Steven Johnson
- [Research and Destroy: A plea for Design as Research](contents/pdf/van-der-Velden-research-and-destroy.pdf), Daniel van der Velden
- [A Vernacular Web](http://art.teleportacia.org/observation/vernacular/), Olia Lialina 
- [Vernacular Web 2](http://contemporary-home-computing.org/vernacular-web-2/), Olia Lialina
- [Prof. Dr. Style](http://contemporary-home-computing.org/prof-dr-style/), Olia Lialina
- [isthisyourpaperonsingleservingsites.com](http://isthisyourpaperonsingleservingsites.com/)
- [Over the Bridge](http://digital-strategies.ma-ad.ch/article/overthebridge/) by Rob Giampietro
- [The Garden of Forking Paths](http://www.coldbacon.com/writing/borges-garden.html#_jmp0_) by Jorge Luis Borges
- [isthisyourpaperonsingleservingsites.com](http://isthisyourpaperonsingleservingsites.com/)
- [Uncreative Writing](contents/pdfs/Kenneth-Goldsmith_uncreative-writing.pdf) by Kenneth Goldsmith (founder of [ubu.com](http://ubu.com/))
- [Racter: Policemans Beard is Half Constructed ](contents/pdfs/RACTER_Policemans-Beard.pdf)
- [Dispersion](contents/pdfs/Dispersion2016.pdf) by Seth Price

## Acknowledgements
Thank you to Brendan Griffiths, Clement Valla, and Laurel Schwulst for setting excellent web-oriented class precedents.

Website set in Times New Roman and [Office Code Pro Light](https://github.com/nathco/Office-Code-Pro/blob/master/Fonts/Office%20Code%20Pro/OTF/OfficeCodePro-Light.otf). Using [highlight.js](https://highlightjs.org/) and [showdown.js](https://github.com/showdownjs/showdown).




