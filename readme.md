# Seamless
## Slideshow that accepts query string params

Seemless is a fullscreen slide show that is controlled by query string parameters. That way, if you want to make a slideshow where there are options to view particular slides, or to begin at particular slides, you can use query strings to control it.  

### Demo

**CURRENTLY HAVING ISSUES WITH THE "PAUSE" FEATURE**

[Click here to view the demo](http://istitch.net/seamless-bg/demo-delux.html)

### Arguments

There are two main arguments possible. The first is to control the start slide. The other is to control the play or pause state. 

If you want to make it [start on slide two](http://istitch.net/seamless-bg/demo-delux.html?start=slide02), add:

    ?start=slide02

Note: the default state is to begin playing.

If you want to [pause the state](http://istitch.net/seamless-bg/demo-delux.html?start=slide02&control=pause), you can add:

    ?start=slide02&control=pause

Note: you have to add it as the second argument so you need to specify a start slide.
THERE'S A BUG THAT'S NOTED IN THE CODE FOR THIS
