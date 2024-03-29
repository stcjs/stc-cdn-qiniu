'use strict';

module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "arrowFunctions": true,
      "binaryLiterals": true,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "restParams": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "unicodeCodePointEscapes": true,
      "globalReturn": true,
      "impliedStrict": true,
      "experimentalObjectRestSpread": true
    }
  },

  "env": {
    "node": true,
    "mocha": true,
    "es6": true
  },

  "rules": {
    "comma-dangle": 2,
    "no-cond-assign": 2,
    "no-console": 1,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": ["error", {"allowEmptyCatch": true}],
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": [2, "both"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "use-isnan": 2,
    "valid-jsdoc": 2,
    "valid-typeof": 2,

    "accessor-pairs": [2, {"getWithoutSet": true}],
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "complexity": [2, 12],
    "consistent-return": 1,
    "curly": 2,
    "default-case": 1,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eqeqeq": 2,
    "guard-for-in": 1,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": [2, {
      "boolean": false,
      "number": false,
      "string": false
    }],
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [1, {
      "ignore": [-1, 0, 1, 60, 24, 1000],
      "ignoreArrayIndexes": true,
      "enforceConst": true,
      "detectObjects": true
    }],
    "no-multi-spaces": [1, {"exceptions": {"VariableDeclarator": true, "ImportDeclaration": true}}],
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": [2, "always"],
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-void": 2,
    "no-warning-comments": [1, {"terms": ["todo", "fixme", "xxx"], "location": "start"}],
    "no-with": 2,
    "radix": 2,
    "wrap-iife": [2, "outside"],
    "yoda": 2,

    "strict": [2, "global"],

    "init-declarations": [1, "always"],
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-restricted-globals": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,

    "callback-return": [2, ["callback", "cb", "next"]],
    "global-require": 2,
    "handle-callback-err": [2, "^(err|error)$"],
    "no-mixed-requires": [1, {"grouping": false}],
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-env": 2,
    "no-process-exit": 2,
    "no-restricted-modules": 2,
    "no-sync": 2,

    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "never"],
    "brace-style": [2, "1tbs", {"allowSingleLine": false}],
    "camelcase": [1, {"properties": "always"}],
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-this": [2, "self", "_this"],
    "eol-last": 2,
    "func-names": 2,
    "func-style": [2, "expression", {"allowArrowFunctions": true}],
    "id-blacklist": ["error", "data", "err"],
    "id-length": [1, {"min": 2, "max": 32, "properties": "always", "exceptions": ["e", "a", "b"]}],
    "indent": [1, 2, {"SwitchCase": 1}],
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": [1, {"before": true, "after": true}],
    "linebreak-style": [2, "unix"],
    "lines-around-comment": [1, {
      "beforeBlockComment": true,
      "beforeLineComment": true,
      "allowBlockStart": true,
      "allowObjectStart": true
    }],
    "max-depth": [1, 8],
    "max-len": [1, 120, 4, {"ignoreComments": true, "ignoreUrls": true}],
    "max-nested-callbacks": [2, 5],
    "max-params": [2, 5],
    "max-statements": [2, 12],
    "new-cap": [2, {"capIsNewExceptions": [], "newIsCapExceptions": []}],
    "new-parens": 2,
    "newline-after-var": [0, "always"],
    "newline-before-return": 0,
    "newline-per-chained-call": 0,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-continue": 1,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, {"max": 2, "maxEOF": 1}],
    "no-negated-condition": 2,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-restricted-syntax": [2, "WithStatement"],
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "never"],
    "one-var-declaration-per-line": 2,
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "none"],
    "padded-blocks": 0,
    "quote-props": [2, "as-needed", {"keywords": true, "numbers": true, "unnecessary": false}],
    "quotes": [2, "single", "avoid-escape"],
    "require-jsdoc": [1, {"require": {
      "FunctionDeclaration": true,
      "MethodDefinition": true,
      "ClassDeclaration": true
    }}],
    "semi": [2, "always"],
    "semi-spacing": [2, {"before": false, "after": true}],
    "sort-vars": 0,
    "space-before-blocks": [1, {"functions": "always", "keywords": "always"}],
    "space-before-function-paren": [1, {"anonymous": "always", "named": "never"}],
    "space-in-parens": [1, "never"],
    "space-infix-ops": [1, {"int32Hint": true}],
    "space-unary-ops": 1,
    "spaced-comment": [1, "always", {
      "block": {
        "markers": ["!"],
        "exceptions": ["*"]
      }
    }],
    "wrap-regex": 0,


    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": [1, {"before": true, "after": true}],
    "constructor-super": 2,
    "no-class-assign": 2,
    "no-confusing-arrow": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 2,
    "no-new-symbol": 2,
    "no-restricted-imports": 2,
    "no-this-before-super": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-var": 2,
    "object-shorthand": 1,
    "prefer-arrow-callback": 1,
    "prefer-const": 1,
    "prefer-reflect": 2,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "sort-imports": 0,
    "template-curly-spacing": 2,
    "yield-star-spacing": [2, "after"]
  },
  "globals": {
    "stc": true
  }
};
