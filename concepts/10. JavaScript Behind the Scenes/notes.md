When using the `var` keyword in JavaScript, two variables with the exact same name can be defined without an error being thrown.
Variables defined with the `var` keyword inside of functions are also accessible outside of that function.
The `let` and `const` keywords, on the other hand, are scoped to their respective blocks. This forces the user to write code more cleanly.
When using a variable defined with the `var` keyword, it is initialized as an `undefined` variable in the beginning of the script. With the `let` and `const` keywords, however, an error is thrown when attempting to access a variable before it is defined in the file. This concept is called "hoisting".
The only reason the `var` keyword is still supported is to support older scripts. There is no longer any use case for the `var` keyword.

Additionally, variables can also be defined without the `var` keyword in front of it. JavaScript automatically interprets this with the `var` keyword. This is, however, also not desirable. Strict Mode forces the user to put a keyword in front of variables. This can be enabled by starting a file with the following string: `"use strict"`.

Contrary to what may be expected, using `push` on an array created for a constant works without throwing an error. This is because the address hasn't changed, but the memory allocated does. When attempting to assign an entirely new array to a constant using the `=`, however, an error is thrown.
The same is true for objects. It is still possible to assign a value to a key in an object, for example.