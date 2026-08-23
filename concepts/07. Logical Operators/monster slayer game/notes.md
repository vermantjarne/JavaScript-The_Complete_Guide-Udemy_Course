For hardcoded values, it's often interesting to define a name using Constant Case (e.g. `ATTACK_VALUE`) instead of Camel Case (e.g. `attackValue`).

The ternary operator is used to assign a value based on a boolean expression (e.g. `const name = userId === 1 ? "MyName" : "YourName"`).

A truthy or falsy value can be converted to a boolean using `!!`. For example, `!!""` will yield `false`.

With the `||` operator, the first truthy value is returned. If all values are falsy, the last value is returned (e.g. `const name = someInput || "MyName"`).
With the `&&` operator, the first falsy value is returned. If all values are truthy, the last value is returned (e.g. `const name = isTrue && "MyName"`).