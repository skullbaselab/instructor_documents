##What is Scope?

A *scope* is a section in your program where a name binding is considered valid. A *name binding* is when a variable (a name) evaluates to a certain value. If I declare `var myName = 20`, then I have bound the name `myVar` to the value `20`. This binding will only be valid in the scope where I declared it.

There are rules on how scopes are handled in JavaScript:

1. New scopes are created every time we create a new function.
2. New scopes can be created inside of other scopes. This essentially means that functions can be created inside of functions.
3. An inner scope has access to bindings that were declared in the outer scope, but the outer scope does not have access to the bindings declared in its inner scopes.

If these rules are confusing, continue with the chapter and then come back to revisit this lesson. Make sure these rules make sense then.
