Constructor functions have been used in JavaScript for a while. They act as a blueprint for objects for its properties and methods, similar to classes. These are defined as regular functions, written in `PascalCase` like classes. With these functions, the `new` keyword is used just like how it's used for creating an instance of a class.

Every constructor function itself (not the instances of the constructor function) has a built-in `prototype` property. The value of `prototype` is assigned to any instance of the constructor function upon creation. Additionally, every object also has the `__proto__` property. A prototype is a connected object used as a fallback object for using properties and methods that do not exist in the main object. This is how inheritance for classes works behind the scenes - the fallback object functions as the base class.

The `toString()` method for example is valid on an instance of an constructor, meaning the base constructor functions also have a prototype built-in. In fact, every object in JavaScript has such a fallback object. This is the object defined under `Object.prototype`.

The `class` syntax is essentially a glorified version of working with constructor functions and Prototypes. It makes working with these easier. In fact, the `extends` keyword still uses prototypes behind the scenes.

It's best to never overwrite the value for `prototype` entirely, but to instead assign values for individual properties of the object. Otherwise you risk overwriting the `constructor()` method of the created object.

There is a convoluted way of creating an object from an existing object: `new <object>.__proto__.constructor()`. This works similarly to `new <ConstructorFunction>()`.

By assigning a value to a property of the constructor function directly (and thus not to its `prototype` property), it's possible to define the equivalent of a static property or method.

The equivalent to fields in classes are the properties being defined directly in the constructor function. This would be as if these would be defined in the `constructor()` method of the class itself. This is essentially the same.

The difference between constructor functions and classes is that, when defining methods in classes, an additional prototype object is created for any instance of that class. That prototype object contains the methods defined in the class. This is an optimization done by JavaScript, as the contents of methods usually does not change. This is implemented in such a way that the `__proto__` property of two objects created from the same class are the exact same. Meanwhile, in constructor functions, the methods exist directly in the main object. This can be changed by assigning the method to `<ConstructorFunction>.prototype.<methodName>` instead of directly in the constructor function.

The key thing to remember is that constructor functions are classes with everything placed into the `constructor()` method of the class. On top of that, constructor functions can be called with new, while classes must be called with new. Constructor functions do not use strict mode by default, while classes do. Properties and methods are by default enumerable in constructor functions, while in classes methods are not enumerable.

The reason `<methodName>() {}` is preferred over `<methodName> = function() {}` or `<methodName> = () => {}` in a class is because with that notation, the method is assigned to the prototype of the class and is thus shared across all instances of the class.

The `Array` and `String` global objects also use prototypes to define most of its methods.

The `Object` global object has the `getPrototypeOf()` method. This returns the same as referencing `<objectName>.__proto__` and is thus a more convoluted way of retrieving the prototype of an object. More interesting is the `setPrototypeOf()` method. This can be used to overwrite the prototype of the given object. To ensure the original prototype remains intact when adding new functionalities to it, the `...` operator can be used together with `getPrototypeOf()` within the `setPrototypeOf()` method. In the case of a basic object defined with `{}`, for example, it is of course redundant to redefine the prototype, as that is inherently found within any object as the prototype.

There is also a `create()` method on the `Object` global object. This creates an empty object. The argument passed to the method will be used as a prototype of the object, not as the object itself. The method can also accept a second argument to define its properties. These then have to be defined similar to how the `defineProperty()` method is used on `Object`.