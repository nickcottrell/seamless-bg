# Seamless
## Slideshow that accepts query string params

Seamless is a slide show that you can control with query string parameters. That way, if you want to make a slideshow where there are options to begin at particular slides, or control pause and play states, you can use query strings to easily integrate it with other UI elements.  

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
