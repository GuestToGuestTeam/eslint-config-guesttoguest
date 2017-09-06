module.exports = {
  rules: {
    // enforce getter and setter pairs in objects
    "accessor-pairs": "error",
    // enforce return statements in callbacks of array methods
    "array-callback-return": "error",
    // treat var statements as if they were block scoped (off by default). 0: deep destructuring is not compatible https://github.com/eslint/eslint/issues/1863
    "block-scoped-var": "off",
    // enforce that class methods utilize this
    "class-methods-use-this": "off",
    // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "complexity": "off",
    // require return statements to either always or never specify values
    "consistent-return": "off",
    // specify curly brace conventions for all control statements
    "curly": "error",
    // require default case in switch statements (off by default)
    "default-case": "error",
    // enforce consistent newlines before and after dots
    "dot-location": ["error", "property"],
    // encourages use of dot notation whenever possible
    "dot-notation": "error",
    // require the use of === and !==
    "eqeqeq": "off",
    // make sure for-in loops have an if statement (off by default)
    "guard-for-in": "off",
    // disallow the use of alert, confirm, and prompt
    "no-alert": "error",
    // disallow use of arguments.caller or arguments.callee
    "no-caller": "error",
    // disallow lexical declarations in case clauses
    "no-case-declarations": "error",
    // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-div-regex": "error",
    // disallow else after a return in an if (off by default)
    "no-else-return": "off",
    // disallow empty functions
    "no-empty-function": "error",
    // disallow empty destructuring patterns
    "no-empty-pattern": "error",
    // disallow comparisons to null without a type-checking operator (off by default)
    "no-eq-null": "error",
    // disallow use of eval()
    "no-eval": "error",
    // disallow adding to native types
    "no-extend-native": "error",
    // disallow unnecessary function binding
    "no-extra-bind": "error",
    // disallow unnecessary labels
    "no-extra-label": "error",
    // disallow fallthrough of case statements
    "no-fallthrough": "error",
    // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-floating-decimal": "error",
    // disallow assignments to native objects or read-only global variables
    "no-global-assign": "error",
    // disallow shorthand type conversions
    "no-implicit-coercion": "error",
    // disallow variable and function declarations in the global scope
    "no-implicit-globals": "error",
    // disallow use of eval()-like methods
    "no-implied-eval": "error",
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": "error",
    // disallow usage of __iterator__ property
    "no-iterator": "error",
    // disallow use of labels for anything other then loops and switches
    "no-labels": "error",
    // disallow unnecessary nested blocks
    "no-lone-blocks": "error",
    // disallow creation of functions within loops
    "no-loop-func": "error",
    // disallow magic numbers
    "no-magic-numbers": "off",
    // disallow use of multiple spaces
    "no-multi-spaces": "error",
    // disallow use of multiline strings
    "no-multi-str": "error",
    // disallow use of new operator when not part of the assignment or comparison
    "no-new": "error",
    // disallow use of new operator for Function object
    "no-new-func": "error",
    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": "error",
    // disallow use of octal literals
    "no-octal": "error",
    // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-octal-escape": "error",
    // disallow reassignment of function parameters (off by default)
    "no-param-reassign": "off",
    // disallow usage of __proto__ property
    "no-proto": "error",
    // disallow declaring the same variable more then once
    "no-redeclare": "error",
    // disallow certain properties on certain objects
    "no-restricted-properties": "off",
    // disallow use of assignment in return statement
    "no-return-assign": "error",
    // disallow unnecessary return await
    "no-return-await": "error",
    // disallow use of javascript: urls.
    "no-script-url": "error",
    // disallow assignments where both sides are exactly the same
    "no-self-assign": "error",
    // disallow comparisons where both sides are exactly the same (off by default)
    "no-self-compare": "error",
    // disallow use of comma operator
    "no-sequences": "error",
    // restrict what can be thrown as an exception (off by default)
    "no-throw-literal": "error",
    // disallow unmodified loop conditions
    "no-unmodified-loop-condition": "off",
    // disallow usage of expressions in statement position
    "no-unused-expressions": "error",
    // disallow unused labels
    "no-unused-labels": "error",
    // disallow unnecessary calls to .call() and .apply()
    "no-useless-call": "error",
    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": "error",
    // disallow unnecessary escape characters
    "no-useless-escape": "error",
    // disallow redundant return statements
    "no-useless-return": "error",
    // disallow use of void operator (off by default)
    "no-void": "error",
    // disallow usage of configurable warning terms in comments": "error",
    // e.g. TODO or FIXME (off by default)
    "no-warning-comments": ["off", { terms: ["todo", "fixme", "xxx"], location: "start" }],
    // disallow use of the with statement
    "no-with": "error",
    // require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    // require use of the second argument for parseInt() (off by default)
    "radix": "error",
    // disallow async functions which have no await expression
    "require-await": "error",
    // requires to declare all vars on top of their containing scope (off by default)
    "vars-on-top": "off",
    // require immediate function invocation to be wrapped in parentheses (off by default)
    "wrap-iife": "error",
    // require or disallow Yoda conditions
    "yoda": "error",
  }
};
