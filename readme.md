# Seamless
## Slideshow that accepts query string params

Seemless is a fullscreen slide show that is controlled by query string parameters. That way, if you want to make a slideshow where there are options to view particular slides, or to begin at particular slides, you can use query strings to control it.  

### Demo

[Click here to view the demo](http://istitch.net/seamless-bg/?slide=1&control=play)

### Arguments

There are two main arguments possible. The first is to control the start slide. The other is to control the play or pause state. 

If you want to make it [start on slide two](http://istitch.net/seamless-bg/?slide=2&control=play), use:

    ?slide=2


If you want to [pause the state](http://istitch.net/seamless-bg/?slide=2&control=pause), use:

    &control=pause


If you want the [slides to play](http://istitch.net/seamless-bg/?slide=2&control=play), use:

    &control=play


NOTE: at this point all of the values need to be defined.
