module.exports = {
  rules: {
    // "enforce" “for” loop update clause moving the counter in the right direction.
    "for-direction": "error",
    // enforce return statements in getters
    "getter-return": "error",
    // disallow await inside of loops
    "no-await-in-loop": "error",
    // disallow comparing against -0
    "no-compare-neg-zero": "error",
    // disallow assignment in conditional expressions
    "no-cond-assign": "error",
    // disallow use of console (off by default in the node environment)
    "no-console": "off",
    // disallow use of constant expressions in conditions
    "no-constant-condition": "error",
    // disallow control characters in regular expressions
    "no-control-regex": "error",
    // disallow use of debugger
    "no-debugger": "error",
    // disallow duplicate arguments in functions
    "no-dupe-args": "error",
    // disallow duplicate keys when creating object literals
    "no-dupe-keys": "error",
    // disallow a duplicate case label.
    "no-duplicate-case": "error",
    // disallow empty statements
    "no-empty": "error",
    // disallow the use of empty character classes in regular expressions
    "no-empty-character-class": "error",
    // disallow assigning to the exception in a catch block
    "no-ex-assign": "error",
    // disallow double-negation boolean casts in a boolean context
    "no-extra-boolean-cast": "error",
    // disallow unnecessary parentheses (off by default)
    "no-extra-parens": "off",
    // disallow unnecessary semicolons
    "no-extra-semi": "error",
    // disallow overwriting functions written as function declarations
    "no-func-assign": "error",
    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": "error",
    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": "error",
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": "error",
    // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-obj-calls": "error",
    // disallow calling some Object.prototype methods directly on objects
    "no-prototype-builtins": "off",
    // disallow multiple spaces in a regular expression literal
    "no-regex-spaces": "error",
    // disallow sparse arrays
    "no-sparse-arrays": "error",
    // disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": "error",
    // disallow confusing multiline expressions
    "no-unexpected-multiline": "error",
    // disallow unreachable code after return, throw, continue, and break statements
    "no-unreachable": "error",
    // disallow control flow statements in finally blocks
    "no-unsafe-finally": "error",
    // disallow negating the left operand of relational operators
    "no-unsafe-negation": "error",
    // require calls to isNaN() when checking for NaN
    "use-isnan": "error",
    // enforce valid JSDoc comments
    "valid-jsdoc": "off",
    // enforce comparing typeof expressions against valid strings
    "valid-typeof": "error",
  }
};
