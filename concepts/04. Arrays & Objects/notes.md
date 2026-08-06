Instead of `parseInt(<number>)`, it is possible to write `+<number>` to convert a string to an integer. This is less explicit than using `parseInt(<number>)`.

Other arithmetic operators will perform the operation when a number and a string are combined. For example, `3 * '3'` will result in `9`.

When passing a value using backticks (`` ` ``), any number is automatically converted to a string.

With the shorthand operators for adding or subtracting 1 from a value (`++` and `--`), the return value differs depending on whether the operator is placed before or after the value. For example, if `value = 5`, `value++` will return `5`, while `++value` will return `6`. Both of them still set `value` to `6`.