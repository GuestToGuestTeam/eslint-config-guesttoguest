module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    "array-bracket-newline": "off",
    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": "warn",
    // enforce line breaks after each array element
    "array-element-newline": "off",
    // enforce consistent spacing inside single-line blocks
    "block-spacing": "warn",
    // enforce one true brace style (off by default)
    "brace-style": "off",
    // require camel case names
    "camelcase": ["warn", { "properties": "never" }],
    // enforce or disallow capitalization of the first letter of a comment
    "capitalized-comments": "off",
    // disallow or enforce trailing commas
    "comma-dangle": "warn",
    // enforce spacing before and after comma
    "comma-spacing": ["warn", { "before": false, "after": true }],
    // enforce one true comma style (off by default)
    "comma-style": ["warn", "last"],
    // require or disallow spaces inside computed properties
    "computed-property-spacing": ["warn", "never"],
    // enforces consistent naming when capturing the current execution context (off by default)
    "consistent-this": ["warn", "_this"],
    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": "warn",
    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": ["warn", "never"],
    // require function names to match the name of the variable or property to which they are assigned
    "func-name-matching": "off",
    // require function expressions to have a name (off by default)
    "func-names": ["off", "as-needed"],
    // enforces use of function declarations or expressions (off by default)
    "func-style": "off",
    // enforce consistent line breaks inside function parentheses
    "function-paren-newline": ["warn", "consistent"],
    // disallow specified identifiers
    "id-blacklist": "off",
    // enforce minimum and maximum identifier lengths
    "id-length": "off",
    // require identifiers to match a specified regular expression
    "id-match": "off",
    // this option sets a specific tab width for your code (off by default)
    "indent": ["warn", 4, { "SwitchCase": 1 }],
    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": ["warn", "prefer-double"],
    // enforces spacing between keys and values in object literal properties
    "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
    // require a space after certain keywords (off by default)
    "keyword-spacing": "warn",
    // enforce position of line comments
    "line-comment-position": "off",
    // enforce consistent linebreak style
    "linebreak-style": "off",
    // require empty lines around comments
    "lines-around-comment": "off",
    // enforce a maximum depth that blocks can be nested
    "max-depth": ["warn", { "max": 4 }],
    // specify the maximum length of a line in your program (off by default)
    "max-len": ["off", 80],
    // enforce a maximum number of lines per file
    "max-lines": "off",
    // specify the maximum depth callbacks can be nested (off by default)
    "max-nested-callbacks": ["warn", 3],
    // enforce a maximum number of parameters in function definitions
    "max-params": "off",
    // enforce a maximum number of statements allowed in function blocks
    "max-statements": "off",
    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": "off",
    // enforce newlines between operands of ternary expressions
    "multiline-ternary": "off",
    // require a capital letter for constructors
    "new-cap": ["warn", { "newIsCap": true, "capIsNew": false }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    "new-parens": "warn",
    // require a newline after each call in a method chain
    "newline-per-chained-call": ["warn", { "ignoreChainWithDepth": 3 }],
    // disallow use of the Array constructor
    "no-array-constructor": "warn",
    // disallow bitwise operators
    "no-bitwise": "off",
    // disallow continue statements
    "no-continue": "off",
    // disallow comments inline after code (off by default)
    "no-inline-comments": "off",
    // disallow if statements as the only statement in else blocks
    "no-lonely-if": "warn",
    // disallow mixed binary operators
    "no-mixed-operators": "warn",
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": "warn",
    // disallow use of chained assignment expressions
    "no-multi-assign": "warn",
    // disallow multiple empty lines (off by default)
    "no-multiple-empty-lines": ["warn", { "max": 2 }],
    // disallow negated conditions
    "no-negated-condition": "off",
    // disallow nested ternary expressions (off by default)
    "no-nested-ternary": "off",
    // disallow use of the Object constructor
    "no-new-object": "warn",
    // disallow the unary operators ++ and --
    "no-plusplus": "off",
    // disallow specified syntax
    "no-restricted-syntax": "warn",
    // disallow all tabs
    "no-tabs": "warn",
    // disallow the use of ternary operators (off by default)
    "no-ternary": "off",
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "warn",
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": "off",
    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": "warn",
    // disallow whitespace before properties
    "no-whitespace-before-property": "warn",
    // enforce the location of single-line statements
    "nonblock-statement-body-position": "warn",
    // enforce consistent line breaks inside braces
    "object-curly-newline": ["off", {
      ObjectExpression: {
        minProperties: 4,
        multiline: true,
        consistent: true },
      ObjectPattern: {
        minProperties: 4,
        multiline: true,
        consistent: true
      }
    }],
    // require or disallow spaces inside curly braces
    "object-curly-spacing": ["warn", "always"],
    // enforce placing object properties on separate lines
    "object-property-newline": ["warn", { allowMultiplePropertiesPerLine: true }],
    // allow just one var statement per function (off by default)
    "one-var": ["off", "never"],
    // require or disallow newlines around variable declarations
    "one-var-declaration-per-line": "warn",
    // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "operator-assignment": ["warn", "always"],
    // enforce consistent linebreak style for operators
    "operator-linebreak": "off",
    // enforce padding within blocks (off by default)
    "padded-blocks": ["warn", {
      blocks: "never",
      classes: "always",
      switches: "never"
    }],
    // require or disallow padding lines between statements
    "padding-line-between-statements": "off",
    // disallow reserved words being used as object literal keys (off by default)
    "quote-props": ["warn", "as-needed", {
      keywords: false,
      unnecessary: true,
      numbers: false
    }],
    // specify whether double or single quotes should be used
    "quotes": ["off", "single", { avoidEscape: true }],
    // require JSDoc comments
    "require-jsdoc": "off",
    // require or disallow use of semicolons instead of ASI
    "semi": ["warn", "always"],
    // enforce spacing before and after semicolons
    "semi-spacing": ["warn", { "before": false, "after": true }],
    // Enforce location of semicolons
    "semi-style": ["error", "last"],
    // require object keys to be sorted
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],
    // sort variables within the same declaration block (off by default)
    "sort-vars": "off",
    // require or disallow space before blocks (off by default)
    "space-before-blocks": ["warn", "always"],
    // require or disallow space before function opening parenthesis (off by default)
    "space-before-function-paren": ["warn", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    // enforce consistent spacing inside parentheses
    "space-in-parens": "warn",
    // require spaces around operators
    "space-infix-ops": ["warn", { "int32Hint": true }],
    // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "space-unary-ops": ["warn", { "words": true, "nonwords": false }],
    // require or disallow a space immediately following the // in a line comment (off by default)
    "spaced-comment": ["warn", "always"],
    // Enforce spacing around colons of switch statements
    "switch-colon-spacing": ["error", { after: true, before: false }],
    // require or disallow spacing between template tags and their literals
    "template-tag-spacing": "warn",
    // require or disallow Unicode byte order mark (BOM)
    "unicode-bom": "warn",
    // require regex literals to be wrapped in parentheses (off by default)
    "wrap-regex": "off",
  }
};
