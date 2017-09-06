module.exports = {
  plugins: [
    "react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Enforces consistent naming for boolean props
    "react/boolean-prop-naming": "warn",
    // Enforce all defaultProps have a corresponding non-required PropType
    "react/default-props-match-prop-types": "warn",
    // Prevent missing displayName in a React component definition
    "react/display-name": "off",
    // Forbid certain props on Components
    "react/forbid-component-props": ["off", { forbid: [] }],
    // Forbid certain elements
    "react/forbid-elements": ["off", { forbid: [], }],
    // Forbids using non-exported propTypes
    "react/forbid-foreign-prop-types": "off",
    // Forbid certain propTypes
    "react/forbid-prop-types": ["off", {
      "forbid": ["any", "array", "object"]
    }],
    // Enforce boolean attributes notation
    "react/jsx-boolean-value": ["off", "never"],
    // Validate closing bracket location
    "react/jsx-closing-bracket-location": "warn",
    // Validate closing tag location
    "react/jsx-closing-tag-location": ["warn", {
      "when": "never"
    }],
    // Enforce or disallow spaces inside of curly braces attributes and expressions
    "react/jsx-curly-spacing": "warn",
    // Enforce or disallow spaces around equal signs attributes
    "react/jsx-equals-spacing": ["warn", "never"],
    // Restrict file extensions that may contain JSX
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".js", ".jsx"]
    }],
    // Configure the position of the first property
    "react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],
    // Enforce event handler naming conventions
    "react/jsx-handler-names": "off",
    // Validate props indentation
    "react/jsx-indent-props": ["error", 4],
    // Validate JSX indentation
    "react/jsx-indent": ["error", 4],
    // Detect missing key prop
    "react/jsx-key": "warn",
    // Limit maximum of props on a single line
    "react/jsx-max-props-per-line": ["warn", {
      "maximum": 1,
      "when": "multiline"
    }],
    // No .bind() or Arrow Functions
    "react/jsx-no-bind": ["warn", {
      ignoreRefs: true
    }],
    // Prevent comments from being inserted as text nodes
    "react/jsx-no-comment-textnodes": "error",
    // Prevent duplicate properties
    "react/jsx-no-duplicate-props": "error",
    // Prevent usage of string literals
    "react/jsx-no-literals": "off",
    // Prevent usage of unsafe target="_blank"
    "react/jsx-no-target-blank": "error",
    // Disallow undeclared variables
    "react/jsx-no-undef": "error",
    // Enforce PascalCase for user-defined JSX components
    "react/jsx-pascal-case": "warn",
    // Enforce props alphabetical sorting
    "react/jsx-sort-props": "off",
    // Validate whitespace in and around the JSX opening and closing brackets
    "react/jsx-tag-spacing": "warn",
    // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": "error",
    // Prevent variables used to be incorrectly marked as unused
    "react/jsx-uses-vars": "error",
    // Prevent missing parentheses around multilines JSX
    "react/jsx-wrap-multilines": "error",
    // Prevent usage of Array index in keys
    "react/no-array-index-key": "error",
    // Prevent passing of children as props
    "react/no-children-prop": "error",
    // Prevent problem with children and props.dangerouslySetInnerHTML
    "react/no-danger-with-children": "error",
    // Prevent usage of dangerous JSX properties
    "react/no-danger": "off",
    // Prevent usage of deprecated methods
    "react/no-deprecated": "off",
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state": "error",
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": "error",
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state": "error",
    // Prevent usage of findDOMNode
    "react/no-find-dom-node": "error",
    // Prevent usage of isMounted
    "react/no-is-mounted": "error",
    // Prevent multiple component definition per file
    "react/no-multi-comp": "error",
    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    "react/no-redundant-should-component-update": "error",
    // Prevent usage of the return value of React.render
    "react/no-render-return-value": "warn",
    // Prevent usage of setState
    "react/no-set-state": "off",
    // Prevent using string references
    "react/no-string-refs": "off",
    // Prevents common typos
    "react/no-typos": "error",
    // Prevent invalid characters from appearing in markup
    "react/no-unescaped-entities": "error",
    // Prevent usage of unknown DOM property
    "react/no-unknown-property": "error",
    // Prevent missing props validation in a React component definition
    "react/prop-types": "error",
    // Prevent definitions of unused prop types
    "react/no-unused-prop-types": "error",
    // Prevent unused state values
    "react/no-unused-state": "off",
    // Prevent usage of setState in componentWillUpdate
    "react/no-will-update-set-state": "error",
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class": "error",
    // Enforce stateless React Components to be written as a pure function
    "react/prefer-stateless-function": "off",
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope": "error",
    // Enforce a defaultProps definition for every prop that is not a required prop
    "react/require-default-props": "off",
    // Enforce React components to have a shouldComponentUpdate method
    "react/require-optimization": "off",
    // Enforce ES5 or ES6 class for returning value in render function
    "react/require-render-return": "error",
    // Prevent extra closing tags for components without children
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": false
    }],
    // Enforce component methods order
    "react/sort-comp": "off",
    // Enforce propTypes declarations alphabetical sorting
    "react/sort-prop-types": "off",
    // Enforce style prop value being an object
    "react/style-prop-object": "error",
    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    "react/void-dom-elements-no-children": 2
  }
};
