module.exports = {
  rules: {
    // require or disallow initialization in variable declarations
    "init-declarations": "off",
    // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-catch-shadow": "error",
    // disallow deletion of variables
    "no-delete-var": "error",
    // disallow labels that share a name with a variable
    "no-label-var": "error",
    // disallow specified global variables
    "no-restricted-globals": "off",
    // disallow declaration of variables already declared in the outer scope
    "no-shadow": "error",
    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": "error",
    // disallow use of undefined when initializing variables
    "no-undef-init": "error",
    // disallow use of undefined variable (off by default)
    "no-undefined": "off",
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": "error",
    // disallow use of variables before they are defined
    "no-use-before-define": "error",
  }
};
