Two important global objects are `document` and `window`. `document` is used to access the elements and the DOM content. `window` represents the active browser tab, providing access to properties and methods related to that window.

If a function is accessed in JavaScript code without it being defined, JavaScript automatically assumes it is part of the methods available for the `window`. For example, `alert()` can be more correctly written as `window.alert()`.

When the DOM is being rendered, whitespace is added as separate nodes. This includes line breaks, spaces and tabs.

In the Chrome dev tools, the last selected element in the HTML code can be accessed by typing `$0` in the console.

Elements can be selected in JavaScript by using `querySelector()` or `getElementById()`. For querying multiple elements, other methods can be used, such as `querySelectorAll()` and `getElementsByTagName()`. The difference between these two types is that `querySelectorAll()` returns a non-live NodeList, while `getXbyY` methods return a live HTMLCollection. The elements within the non-live NodeList are still references to the actual elements.

Nodes are the objects that make up the DOM. This includes element nodes, text nodes and attribute nodes. Elements are a type of node that contains properties and methods to interact with these elements. Which properties and methods are available depends on the specific element.

Elements can be stored into variables and accessed further by, for example, using `textContent`, `id` or `className`. These can also be manipulated in JavaScript by setting their values.

Attributes are often mapped to properties for elements. This occurs with `id` and `className` (though the latter has a different naming convention). For `value` on an `input` element, for example, there is only one-way synchronization. When setting the `value` property through JavaScript, it is reflected to the user, but the attribute is not updated in the DOM. Only when the `setAttribute()` method is called, the changes are reflected in the DOM, but it is not reflected the the user on the page. This portrays how attributes and properties behave to one another. Properties are mapped from attributes, but they are not always synchronized to each other.

The DOM can be traversed in JavaScript to select children, descendants, parents or ancestors. Using `parentNode`, `parentElement` or `closest()` gives access to the parents, while `childNodes`, `children` or `querySelector` can access the childs. There are also `firstChild`, `firstElementChild`, `lastChild` and `lastElementChild` available. For siblings, `previousSibling`, `previousElementSibling`, `nextSibling` and `nextElementSibling` can be used to access the previous or next node or element respectively.
Traversing the DOM can be useful for ensuring the node or element that is selected remains mostly the same when the node tree changes. This should still be used with care, as the relations between nodes may change.

Text nodes exist in between element nodes through the whitespace between element nodes. These text nodes (accessible via `childNodes` for example) can be made visible on the page through the CSS property `white-space: pre`.

To make it easier to manage classes, `classList` exists as an alternative to `className`. This is an object containing all classes on an element.

`innerHTML` and `insertAdjacentHTML()` can be used to add an HTML string. `appendChild()`, `append()`, `prepend()`, `before()`, `after()`, `insertBefore()`, `replaceChild()` and `replaceWith()` are examples of methods that can be used to insert DOM elements or nodes. Before using these methods, an element should be created using the `createElement()` method and stored in a variable. This last method for inserting code into HTML is more interesting, as the elements remain accessible afterwards. `insertAdjacentElement()` can be used similarly to `insertAdjacentHTML()`, but then for an element object.

`append` allows text nodes to be added and is able to add multiple nodes at once.

An element that is manipulated in the DOM through the previous methods is not duplicated, but detached from its existing location and moved to the new location. The `cloneNode()` method can be used for duplicating a node, if desired. Depending on the passed argument for the parameter `?deep`, a deep clone is created.

The `remove()` method can be used to remove an element. Similarly, the `removeChild()` method can also be used on the parent element.

For all of these methods, it's important to acknowledge the browser support. Most of the shorter-named methods are not supported in Internet Explorer, for example.

The `splice()` method can be used to remove one or more elements from an array.

Deleting an element from the DOM will also remove any event listeners from said element if there is no code reference to the variable anymore.