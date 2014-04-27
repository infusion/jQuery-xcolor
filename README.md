jQuery xcolor Plugin
====================

Description
-----------
The jQuery xcolor plugin is an extensive library for color manipulation.



Calculating Colors
---
```javascript
// Calculate a grey level color value
$.xcolor.greyfilter('#c00');

// Calculate a gradient color between #fc0 and #f00 at position 23/100
$.xcolor.gradientlevel('#fc0', '#f00', 23, 100);

// Calculate the opacity as if lightgrey would overlay #f00 with an opacity of 69%.
$.xcolor.opacity('#f00', 'lightgrey', 0.69);
```

and many more! [Check out the full documentation!](http://www.xarg.org/project/jquery-color-plugin-xcolor/)

Colorizing Text
----
```javascript
$(".foo").colorize("burntsienna", "blue", function() {
   // Return a value between 0 and 1, indicating a gradient level between "burntsienna" and "blue"
   return Math.random();
});
```


CSS Hook
-----

The color parser implements a CSS hook. Using a random color is now as easy as

```javascript
$('h1').css('background', 'rand');

```


Further examples and documentation
==========================
For further details and code examples take a look at the demonstration and documentation page on:

http://www.xarg.org/project/jquery-color-plugin-xcolor/

License
======
Dual licensed under the MIT or GPL Version 2 licenses.
