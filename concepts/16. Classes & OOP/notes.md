Overall, it's interesting to build the DOM elements entirely from the JavaScript code, so all of that code relates to the building of the elements in some way. With more complex applications, it's important to manage and classify objects and logic properly. This is where OOP and classes can provide a lot of benefit.

A class represents a blueprint for an object. It defines the properties and methods of said objects. The objects created from the class are instances of the class. This process simplifies creating similar objects.

Classes are defined with the `class` keyword. The convention is to write them in `PascalCase`. Fields of a class are assigned a default value through the `=` operator. When an instance of the class is created, the fields serve as the properties of the object.

An instance of a class can be created by calling a constructor method of the class through `new <ClassName>()`. This is then considered to be an object.

Similar to the shortened notation for methods for objects, methods can be added to a class. The `constructor()` method is reserved for being called when `new <ClassName>()` is called. Parameters can be added to the `constructor()` method. These are then automatically added as properties of the instance of the class, even if these are not explicitly defined. Properties can also be added to an object without explicitly defining them in other methods than the `constructor()` method.

Classes can manage their own fields through their methods by default, but not those of other classes. This is where the difference between static and instance fields, properties and methods comes into play. The static versions are defined with the `static` keyword and are only accessible on the class itself, without instantiation. This is, for example, used in helper classes or for global configuration. The instance versions are defined without the `static` keyword and are only accessible on instances of the class. This is used for the core reusable logic. The `static` keyword allows for methods to be called such as `App.init()` directly on the class itself.

Just like how it is possible to add getters and setters to objects, they can be added to classes.

It is possible to create specialized versions of classes through inheritance, extending the base class. This can be done using the `extends` keyword after the class name. It is only possible to inherit from a single class. In such a case, the `this` keyword in the inheriting class will also refer to anything defined in the base class. If the inheriting class does not have a constructor, the constructor of the base class is automatically called.

The `super()` method can be used to call the constructor of the base class from within the constructor of the inheriting class. This should be called before using `this` anywhere in the constructor of the inheriting class. This includes any methods that have been invoked by the base class.

A method can be initiated as an empty method in the base class to act as a placeholder method. That method is then redefined in the inherting class(es). This way, the method can be called within the code of the base class (for example, in the constructor) without having any functionality there.

It's important to acknowledge the order of execution. An element may, for example, be rendered before the content is loaded. There, it's essential to not expect the rendering to contain actual data already.

In classes, as these are objects, if an event listener is defined within a method, it's possible to use an anonymous arrow function instead of the `bind()` method to ensure the context of the class is being used for any use of `this`. However, it is then important to add `()` after the method's name, to execute it whenever the anonymous function is executed. An arrow function could also be stored in a field of the class instead of defining it as a method, after which it can also be called directly using `this.<fieldName>` for the event listener.

Fields, properties or methods can either be public or private. Public means these are accessible outside of the class or object, and is being worked on in other code. Private indicates something is only accessible from within the class or object itself. This is useful for separating business logic. It is defined using the `#` symbol for setting that segment of the class to private. Making a field, property or method private within an inheriting class also means that it is not accessible from a method defined in the base class. Previously, pseudo-private fields and properties existed, where developers used the `_` before the name of a field or property to indicate that it should not be accessed from outside of the object.

The `instanceof` operator can be used to check whether an object is an instance based on a class.

Several base classes exist in JavaScript, such as the `Object` class, that can be useful to work with. This class also has the `getOwnPropertyDescriptors()` or `getOwnPropertyDescriptor()` methods, which can be used to retrieve the property descriptors of an object. This is metadata stored by JavaScript for the object. The `defineProperty()` method can be used to set a property descriptor manually. This can be used to, for example, lock a property so it can not be written to or deleted. It can also be used to set a property to not be enumerable, meaning it is excluded from for-in loops.