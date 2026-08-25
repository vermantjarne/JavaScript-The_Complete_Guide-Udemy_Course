When a function is stored inside of an object, it is considered a method.

`console.dir()` can be used to log a JavaScript object with its object hierarchy. This can be useful for inspecting objects in detail.

Functions can be placed on the right side of an `=` operator. In that case, the function is not stored in the name defined after the `function` keyword, but in the variable it is defined in. In that case, the name defined after the `function` keyword can be omitted to create an anonymous function. It may still be interesting to define the name of a function for the sake of debugging.

Functions are hoisted to the top of the file, hence they can be used everywhere. When functions are initialized in function expressions, they are also hoisted to the top, but not initialized. Whether or not functions are defined through expressions is a personal preference, though function expressions force the function to be defined before it is used in the code.

If no other place in the code requires the anonymous function to exist, it could also be written inline (to be used for an event listener, for example).

Anonymous functions can also be rewritten using the `=>` keyword, creating an arrow function. One advantage of arrow functions is that, if there is only one expression in the function's body, the `{}` and `return` keywords can be left out. An empty pair of parentheses is required when defining it with no parameters. If exactly one parameter is defined for the arrow function, the parentheses can be omitted. More advantages of arrow functions are explored in a later chapter.

When defining an object as the return value of an arrow function without `{}` for defining the function's scope, the object needs to be enclosed in parentheses to avoid the `{}` of the object being interpreted as the function's scope, and throwing a syntax error.

Functions can still be called when missing a number of arguments. By default, the value will be `undefined`. However, a default value can be assigned in the function definition by using the `=` operator. Passing `undefined` as a parameter to a function will also make the default value be used. The parameters with default values do not need to be the last parameters in the function definition.

The rest operator `...` can be used as a parameter to define an indefinite amount of parameters to a function. Each argument that is passed after all non-rest parameters to the function is then merged into an array for the rest parameter. There may only be a single rest parameter in a function definition, and the rest parameter must always be the last parameter.
When a function is defined with the `function` keyword, a default parameter of `arguments` is added. It provides an array-like variable that contains a list of all arguments passed. It is preferred to use a rest parameter with an arrow function, however.

A callback function is a function that is passed as an argument to another function. This allows functions to be called asynchronously. An example of this being used is for event listeners.

The `bind` method can be used on a function to prepare the function with the given arguments, without executing the function directly (e.g. `someFunction.bind(this, "Example")`). Other arguments passed to the function at a later point will be added to the arguments at the end of the list of arguments.

Similarly to the `bind` method, the `apply` and `call` methods exist for functions. Their use cases will be discussed later.