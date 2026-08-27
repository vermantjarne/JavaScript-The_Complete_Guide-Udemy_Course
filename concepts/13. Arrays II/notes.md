There are other iterables that exist than arrays. An iterable is an object for which a for-of loop can be used. Examples of other iterables are `NodeList`, `String`, `Map` and `Set`. Array-like objects are objects that have a `length` property and use indexes to access items, such as a `NodeList` or `String`.

There are several ways of creating an array. Some use `[]` while others use the `Array` class. Most of the time, the `[]` notation is better performance-wise.

For adding items to the end of arrays, the `push()` method exists. An item can be added at the start of an array by using the `unshift()` method. Meanwhile, the `pop()` method can remove the first item, while the `shift()` method removes the last item in the array.

When targetting the index of an element that does not exist (e.g. targetting the 5th element in a two-element array), all previous indexes that do not exist are considered empty. This functionality is very niche however.

The `splice()` method is used to remove items in a certain position in an array, and, if desired, adding new elements to the array. There are two available versions of the `splice` method. One of these versions contains a parameter with the items to be added in that position. The `splice()` method also accepts negative values for the `start` parameter, at which point it starts counting from the end of the array to determine the starting position.

The `slice()` method exists to create a copy of (a part of) the array based on the arguments passed. Similarly to the `splice()` method, it accepts negative values.

The `concat()` method creates a copy of an array while appending the elements of the given array to the array the method is executed on.

The `indexOf()` method returns the index of a certain item in the array. When it does not find an index, it returns the value `-1`. The `lastIndexOf()` method does the same thing, but starts searching from the end of the array. These methods do not work for objects.

The `find()` method can be used to find an element in an array that meets a certain condition. It accepts a function with the possible parameters of the element, the index and the entire array. This method creates a reference to the object in the array. It does not create a copy of the element. Similar to this, the `findIndex()` method exists for arrays.

The `includes()` method returns a boolean that is true if the element can be found in the array.

The `forEach()` method can be used as a simpler alternative to loop through elements of an array. It requires a callback function which determines the action performed on each element of the array.

The `map()` method maps an array to a new array based on the callback function passed as an argument. The callback function expects a return value that defines what each element of the original array will represent in the new array.

The `sort()` method is used to sort an array based on the given callback function. That function should order elements `a` and `b` based on whether or not `a` should go before `b`. If `a` is after `b`, it should return `1`. If the elements are interchangeable in position, it should return 0. If `a` goes before `b`, it should return `-1`. Note that this method does mutate the original array.

The `reverse()` method reverses the order of an array.

The `filter()` method enables filtering of elements based on a given callback function. It expects the function to return a boolean that determines whether or not the element should exist in the filtered array.

The `reduce()` method executes the callback function for each element in the array. For the first iteration, `previousValue` is either the `initialValue`, if set, or `undefined`. Meanwhile, `currentValue` represents the value of current element of the original array. For the next execution, `previousValue` is the outcome of the previous execution, while `currentValue` still holds the value of the current element of the array. This is then done for each element in the array. This entire process represents a recursive function execution. It essentially compacts the array into a single number. This method can be used to, for example, calculate the sum of all elements in an array easily.

A number of these methods can be chained together to create more concise follow-up logic.

On a string, the `split()` method splits the string on a given separator. This method returns a new array. On the opposite end, the `join()` method on an array joins array elements together into a single string. With both methods, each element is made into a string.

The `...` (spread) operator can be used to create a copy of an existing array. It does not create a reference, but duplicates each element in the original array to the newly created array. Essentially, this operator spreads the entries of an array into a comma-separated list of elements. For objects, however, the address to the place in memory is copied, meaning changes to the object in the original array are reflected in the copied array.

Arrays can be destructured by putting `[el1, el2, ...]` on the left side of the `=` operator. This allows you to store the array across multiple variables at once. Here, the `...` operator could be used within the destructuring to collect the remaining elements as an array in a variable.