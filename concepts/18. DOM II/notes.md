The `data-` prefix can be used to create custom attributes on DOM elements, to store data on the element. This way, data can be read from this element as long as it is accessible in the DOM. All attributes on an element that start with `data-` are merged into the `dataset` property on the element in JavaScript. Attributes can be retrieved or set individually in JavaScript by getting or assigning a value to `<element>.dataset.<attributeName>`.

On a DOM element, the `getBoundingClientReact()` method can be used to retrieve the position, width and height of the element. These numbers are written in pixels. Additionally, `offsetTop` and `offsetLeft` exist to retrieve the x and y coordinates of the element. `clientTop` and `clientLeft` returns the coordinates from the border of the element to the contents of the element itself (excluding scrollbars, padding and margin, for example). Meanwhile, `offsetWidth` and `offsetHeight` return the entire width and height of the element. `clientWidth` and `clientHeight` can be used to obtain the inner width and inner height, without any border, scrollbar, etc. The `scrollHeight` property stands for the height of the contents of an element, including the non-visible parts. `scrollTop` shows how far along the content is scrolled.

`window.innerWidth` and `window.innerHeight` can be used to obtain the width and height of the window. These dimensions include the scrollbar, however. The better method for retrieving these values is to use `document.documentElement.clientWidth` and `document.documentElement.clientHeight`.

It's important to acknowledge that all properties related to the positioning of an element are read-only. Setting the position of an element can be done through CSS styling.

The `scrollTo()` method can be used on elements to scroll to a certain absolute x and y position. The `scrollBy()` method is used to scroll further down by a certain amount of distance in the x and y coordinates. These methods also accept an object with additional configurations to scroll instead of two values, for example `{top: 50, behavior: "smooth"}`.

It's possible to scroll to an element by retrieving the element's x and y positioning, then scrolling to that coordinate. An easier method of scrolling an element into view is to use the `scrollIntoView()` method. Some browsers accept an object that sets additional configurations, such as `{behavior: "smooth"}`.

The `<template>` HTML tag can be used to add a tag to the HTML file that, by default, does not get rendered by the browser. This can then be used to take the contents from within that `<template>` tag and move it to a different element. This helps centralize all HTML code.

Scripts can be created dynamically in JavaScript by inserting a `<script>` tag into the HTML. This can be useful for defining when you would like a specific script to be ran.

The `setTimeout()` method is used to set a timer in JavaScript. It accepts a function and a time in ms as its arguments. This is an example of asynchronous code being ran by JavaScript. The `setInterval()` method works similarly to the `setTimeout()` method, except the function is repeated over an interval rather than executed once. To stop a timer or interval from being ran, the `clearTimeout()` and `clearInterval()` methods can be used. These expect the ID of the timer or interval as an argument, which is returned by the `setTimeout()` and `setInterval()` methods respectively.

The `location` property is an object that contains several properties related to the current browser location (`host`, `origin`, `pathname`, etc).

The `history` property is an object that allows navigation between the user's history on the window.

The `navigator` property is an object that contains information about the user's browser and device environment. This also contains the `clipboard` property to gain access to the user's clipboard.

The `Date` class can be used to work with dates. An instance of this class will by default contain the current date, time and timezone. It also accepts an argument to define a specific date. Several methods can be used to retrieve or set specific information from or on this object.

`Error` objects can be created, as these are defined as constructor functions. These can be thrown using the `throw` keyword. When a new error is thrown using `throw new Error("Failed!")`, an error is thrown with the stack trace.