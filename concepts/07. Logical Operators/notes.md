Different objects holding the same keys and values are not equal when compared with one another. Thus, this also counts for arrays.

Integer values can be used as falsy or truthy values. `0` is considered `false`, while any other number is considered `true`.
For string values, empty strings are considered `false`, while any other string is considered `true`.
Objects and arrays are always treated as `true`.
`null`, `undefined` and `NaN` are always treated as `false`.

The operator precedence can be checked at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence.

For hardcoded values, it's often interesting to define a name using Constant Case (e.g. `ATTACK_VALUE`) instead of Camel Case (e.g. `attackValue`).

The ternary operator is used to assign a value based on a boolean expression (e.g. `const name = userId === 1 ? "MyName" : "YourName"`).

A truthy or falsy value can be converted to a boolean using `!!`. For example, `!!""` will yield `false`.

With the `||` operator, the first truthy value is returned. If all values are falsy, the last value is returned (e.g. `const name = someInput || "MyName"`).
With the `&&` operator, the first falsy value is returned. If all values are truthy, the last value is returned (e.g. `const name = isTrue && "MyName"`).