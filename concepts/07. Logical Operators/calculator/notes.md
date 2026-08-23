Different objects holding the same keys and values are not equal when compared with one another. Thus, this also counts for arrays.

Integer values can be used as falsy or truthy values. `0` is considered `false`, while any other number is considered `true`.
For string values, empty strings are considered `false`, while any other string is considered `true`.
Objects and arrays are always treated as `true`.
`null`, `undefined` and `NaN` are always treated as `false`.

The operator precedence can be checked at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence.