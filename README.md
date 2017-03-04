# music-boxes
## Step 1: You are about to enter a world of sound

---
Alright. Let’s start with the exciting part and get those audio files working in our project.

Go to your project's index.html tab.
Erase everything in the `<body>` tag.
Inside our newly empty body tag, add an `<audio>` tag.
Our code looks like this:
```html
<body>
	<audio>
	</audio>
</body>
```
That `audio` tag is going to be the key to the whole project. It’s a special type of element that allows us to play audio files in web pages. We’ll fill it with all the files we’ve uploaded in the next step.

## Step 2: Adding some Audio

---
Now that we’ve made our `audio` tag we need to fill it with audio files. This is where things can get a little tricky.

The problem is that there isn’t one audio file type all browsers can play. Instead we must offer three different audio files that we know various browsers will be able to handle. Each one of the files will make the same sound but they have been converted to different formats that are suitable for different browsers. By providing different files, we make it more likely that someone will be able to hear and play with our music boxes project.

So now that we know why we have so many different file types, let’s add them to our `<audio>` tag. We’ll do it by defining three different sources for our audio element that a browser could pick.

Inside the `<audio>` tag add a new `<source>` tag.
Next to the word `source` in the opening tag add the `src` `attribute`, `src=""`. Between the quotes, you'll be adding a link to an audio file you uploaded.
Put your cursor in between the `src` attribute's quotes and paste in the URL for an audio file.
After the `src` `attribute`, add the `type` `attribute`, `type="audio/mpeg"`. This tells the browser what type of audio file this is.
Go ahead and add two more `<source>` tags to hold the `OGG` and `WAV` files for the C note sound. The audio types for these will be `"audio/ogg"` and `"audio/wav"`.

Once you’ve added those files. Add the `attribute` `controls` to the inside of the opening audio tag. This will add audio player controls to our file and let us test the sound in Output tab mode.

Our code looks like this. Your `src` paths will be slightly different:
```html
<audio controls>
	<source src="c_note.mp3" type="audio/mpeg"></source>
	<source src="c_note.ogg" type="audio/ogg"></source>
	<source src="c_note.wav" type="audio/wav"></source>
</audio>
```
Now pretty much anyone with a modern browser should be able to hear this note! So let’s test it out.

Go back to the Output tab.
You should see a some audio controls in the upper left.
Press play and listen to the sound. That’s our audio file!
You can use this method to quickly play audio files in your projects. It’s pretty basic and not very cool looking. We want to make a musical instrument out of these sounds. To do that we’ll need to do a little more work.

Go ahead and add `<audio>` tags and source files for each of our other music notes.
Once you’ve added and tested all the files, take `controls` off of the `audio` tags. We want to hide them for now. Don’t worry, they’re still there. In the next steps we’ll make custom buttons to control and play those files.


## Step 3: Little Boxes

---
Let’s start by making the boxes that will act as our “keys.” We will be giving each one a unique color and style so that we can tell them apart. When we finished we will have something that looks like the picture above. Each box will eventually become a button that plays a single note.

In the index.html tab add a new `<div>` tag below our audio files.
Give it an `id="instrument"` `attribute`. We'll use this container to hold and position the note boxes.
Inside the `<div id="instrument">`, add seven more `div`s.
Give each `<div>` an `id` that corresponds to a musical note starting with c and ending with b. *Hint: this is a C scale (c, d, e, f, g, a, b)*.
Also, give each `<div>` a class called `box` (We'll use this to shape all of our note boxes the same).
Our code looks like this:
```html
<div id="instrument">
	<div id="c" class="box"></div>
	<div id="d" class="box"></div>
	<div id="e" class="box"></div>
	<div id="f" class="box"></div>
	<div id="g" class="box"></div>
	<div id="a" class="box"></div>
	<div id="b" class="box"></div>
</div>
```
Alright, Now we have all our divs in place. Let’s style them!

Flip to the style.css tab. Go ahead and erase any code that’s already there.
Make a style that changes the `background-color` of the `<body>` to `black`
Our code looks like this:
```css
body {
	background-color: black;
}
```
Next, make a style for our `instrument` `id`.
Give it properties that will hold our buttons and position them in the center of the browser.
Our code looks like this:
```css
#instrument {
	height: 116px;
	width: 812px;
	padding-right: 10px;
	padding-top: 50px;
	margin: auto;
	position: absolute;
	top: 0; left: 0; bottom: 0; right: 0;
}
```
Next, create the box class that will give our boxes shape and sit inside our instrument.
We’ll set the `width` and `height` to `100px` and the `top` and `left` `margins` to `10px`. A `float: left;` property will keep them lined up nicely.
Our code looks like this:
```css
.box {
	width: 100px;
	height: 100px;
	margin-left: 10px;
	margin-top: 10px;
	float:left;
}
```
Now that we’ve got all our `#instrument` and `.box` styles, let’s create styles that will individually color each of our boxes.

Make a new `#id` for each of our musical note boxes.
Give each box a `3px solid border` in a unique color. (We gave each of ours a color of the rainbow.)
Give each of the boxes a unique `background-color` (We made ours a darker tint of its border color)
The code for our note boxes looks like this:
```css
#c {
	background-color: #3e181b;
	border: 3px solid #db1d2d;
}
#d {
	background-color: #422018;
	border: 3px solid #f0421c;
}
#e {
	background-color: #45391b;
	border: 3px solid #fec02d;
}
#f {
	background-color: #193c29;
	border: 3px solid #20d071;
}
#g {
	background-color: #18323e;
	border: 3px solid #1a9ddb;
}
#a {
	background-color: #331f35;
	border: 3px solid #a13fad;
}
#b {
	background-color: #43293d;
	border: 3px solid #f26fd4;
}
```
Take a look at your Output tab. How does your music box look so far?

## Step 4: Button Boxing

---
Now that we’ve made our music boxes, let’s give them some properties that make them more fun to click and strum.

Let’s begin by adding some `hover` effect to our buttons that will brighten their background color up a bit as well as turn our cursor into a little finger instead of an arrow. Let’s start with `#c` id.

Add a new `hover` pseudo class for `#c`.
Add a `background-color` property that’s a lighter tint of its current color.
We’ll also add a `cursor` property with pointer as it’s value. This will change the cursor to the little hand.
The code for our note boxes looks like this:
```css
#c:hover {
    background-color:#661920;
    cursor: pointer;
}
```
Test it out on Output tab. See how the box lightens up and the color changes when you hover over it?

Go ahead and make hover classes for each of the note boxes. You can add them right above their parent style to help keep track of them.

You can use these values for the hover background-color:
```css
c: #661920
d: #6e2819
e: #735b20
f: #1b613b
g: #184d65
a: #4e2753
b: #6f3a62
```
Now let’s make our boxes brighten all the way up when we click them. To do this we will add a new pseudo class called `active`.

In between the `#c` id and `#c:hover` pseudo class add a new `#c: active` class.
Add a `background-color` property that will match its border color.
Our code looks like this:
```css
#c:active {
    background-color:#db1d2d;
}
```
Go back to the Output tab mode. Click on the first box. See how it brightens up all the way when its pressed? That’s what active is doing. Go ahead and make active pseudo-classes for all the note boxes that brighten them up to match their border colors when clicked.

## Step 5: The Sound of Music

---
Alright. We’ve got all the pieces in place! Now let’s add a little Javascript and get this thing making music.

Let’s start with our first note, the c note.

Go back to the index.html tab.
Find the `audio` tag for the C note.
Add the id `cAudio`. This will help us control this element with Javascript.
Our code looks like this:
```html
<audio id="cAudio">
	<source src="c_note.mp3" type="audio/mpeg"></source>
	<source src="c_note.ogg" type="audio/ogg"></source>
	<source src="c_note.wav" type="audio/wav"></source>
</audio>
```
Back in the script.js tab add a new `variable` called `cNote`.
Use `document.getElementById` to pull the `cAudio` audio element we defined on the index.html tab.
Our code looks like this:
```javascript
var cNote = document.getElementById('cAudio');
```
Now that we’ve got a `variable` with our audio file, let’s make it play.

Let’s use jQuery to call out our `#c` `<div>` and make it play our `cNote` `variable` every time it’s clicked.

To do that start a new line and add the following text:
```javascript
$('#c').mousedown(function(){
});
```
This will turn that `#c` `div` into a true button that will run a function as soon as the `<div>` is pressed with your mouse button.

In between the function braces, add the line: `cNote.play()`
Go to the Output tab mode and click the first box? Did the note play?
Try clicking it twice, quickly. You’ll notice that the audio file will play all the way through (about 8 seconds) before we can click it again. That’s no fun. Let’s add some code to change that.

Go back into the script.js tab.
Add a new line of code above `cNote.play();`
Add the following text: `cNote.currentTime = 0;`
Our code looks like this:
```javascript
$('#c').mousedown(function(){
    cNote.currentTime = 0;
    cNote.play();
});
```
`currentTime` is a property that will scrub back to a certain point of a media file, measured in seconds. In this case we’re scrubbing it back to the beginning, or 0 seconds. This will happen every time the button is clicked and just before the file plays.

Go ahead and add `ids`, `variables` and `.mousedown` functions for the six other notes and your music player will be finished!

You can copy the code we just wrote and swap in new `variable` names and `ID`s.

Once you’re finished enjoy your music player! See what kind of songs you can play.

### UpShift Challenges

1. Clicking for each note is cool. My what if we change the interaction to `.mouseover` so that the mouse strums the surface?

2. After you’ve changed the interaction to `.mouseover`, can you rearrange and duplicate the notes to make them into a melody or chord? Try changing their size and position as well.

3. Music notes are only one type of sound. Try finding other audio clips, or recording your own and adding them to the board. Maybe add pictures of where the sound came from to the boxes as well.
