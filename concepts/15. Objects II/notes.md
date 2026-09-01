Methods are a core data structure in JavaScript. Often, these reflect real-world entities. Data is stored in properties, while actions are stored in methods.

Numbers, strings, booleans, `null`, `undefined` and symbols are considered primitive values. Everything else is considered an object and is a reference value.

While constant objects can not be changed by reassigning its value, its properties can be assigned a new value. Accessing a property on an object that does not exist returns `undefined`.

The `delete` keyword can be used to delete a property from an object. This yields the same result as setting the property's value to `undefined`. Of course, `undefined` should never actively be assigned, hence the `delete` keyword is preferred.

Properties of objects accept anything that is also accepted for naming a variable. Additionally, each property is converted to a string behind the scenes. Hence, strings with whitespace are supported if these are surrounded by `""`. To access those properties, the alternative notation for accessing object properties can be used (e.g. `person["first name"]`). With this notation, CSS properties that are not valid variable names can be accessed using their original CSS property names (e.g. `style["background-color]`).
On top of that, numbers are accepted as keys for objects. These can only be accessed through the `[]` notation.

With the `[]` notation, it's important to assign and retrieve key names consistently. Using `[]` around the name of a key within an object allows it to be set dynamically with a variable, for example. Similarly, it can be retrieved with a variable key name using the `[]` notation.

The properties of objects are ordered according to the order in which they were added to the object. The exception to this are objects that only contain numbers as its keys.

If the key and value of an object hold the same name - for example, a variable `title` is defined and the key of an object is `title` - it can be shortened from `title: title` to simply `title` within the object.

The `...` operator can also be used on objects to create a new object containing the same keys and values as the original object, without a reference to the original object. As is the case with arrays, it is not a deep copy, and nested objects are still reference values. What is possible is to reassign the object in the new array definition (e.g. `{...person, hobbies: [...person.hobbies]}`). Another way of creating a duplicated object is to use the `Object.assign()` method.

Objects can be destructured, similarly to arrays, by using `{}` on the left sign of the `=` operator. The elements of the object should be keys that exist within the destructured object. It's possible that this name clashes with an existing variable name, in which case the `:` can be used to define a new name for the variable. Just like with arrays, the `...` operator can be used to target the remaining properties of the destructured object.

To return a boolean based on whether a certain key is found in an object, the following structure can be used: `"title" in movie`. Alternatively, it can be checked if the property's value is `undefined`.

The `this` keyword tells JavaScript to point at the code responsible for executing the function. In the case of objects, this can be used in a non-arrow function defined in a property. Arrow functions can't be used for this use case, as they inherit the `this` scope from the place the arrow function was defined. That can be interesting to use if the desired scope for `this` should not be the function's scope. The method can also be defined as `<methodName>() {}` instead of explicitly using the `function` keyword. This also differs between strict mode and non-strict mode, as it returns `undefined` in strict mode and the global object in non-strict mode.

With object destructuring, the `this` keyword refers to the global execution context (the `Window` object) when it's being called. To prevent this, the `bind()` method can be used to define the scope to which the `this` keyword is bound when executing the function. Any further executions will use that scope. If another scope is preferred somewhere, it's possible to overwrite the scope once using the `call()` or `apply()` method. These methods execute the function immediately, with the `call()` method accepting a comma-separated list of arguments, while the `apply()` method accepts an array of the arguments passed to the function.

In the case of a function being bound to an event listener, `this` refers to the DOM element, as that element triggered an event that is responsible for executing the function. This is also only the case if the `function` keyword is used - not for arrow functions, as arrow functions then refer to the global execution context.

Getters and setters can be created on objects using the `get` and `set` keywords. Upon placing a property name after this, it allows an internal value of the object to be set in the getter or setter's scope, so the internal value is never directly edited. The internal value is accessed through `_<propertyName>` This is useful for cases like having global validation when changing a property of an object. There is no explicit writing of `get` or `set` required when getting or setting the property. The code that should be executed when getting or setting a function is automatically determined by JavaScript based on the action the code is performing. For example, `const name = person.name` will use the getter, while `person.name = "William"` will use the setter. Getters and setters allow a property of an object to be read-only, write-only or read-and-write.