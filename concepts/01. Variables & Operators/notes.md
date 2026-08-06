If the script tag is located in the head section of the HTML file, the JavaScript is loaded and executed before the browser is able to interpret the HTML.
Thus, it is better to place it before the closing tag of the body.

Variables (written as `let userCount = 5`) are able to have their value changed.
Constants (written as `const userCount = 5`) are not able to have their value changed.
Is it encouraged to use constants where possible.

Within the names of variables and constants, letters, digits, `$` and `_` are allowed. They may, however, not start with a digit. A `_` may only be used in the beginning of the name.

Variables can be defined without being initialized, by simply writing `let userCount`.