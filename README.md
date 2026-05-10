# template-linting-web

Set up linting for web projects

## biome

From <https://github.com/standard/eslint-config-standard/blob/master/src/index.ts>…
these should be all of [Standard](https://standardjs.com/)'s rules:

```js
{
  "rules": {
    "no-var": "warn",
    "object-shorthand": ["warn", "properties"],

    "accessor-pairs": [
      "error",
      { "setWithoutGet": true, "enforceForClassMembers": true }
    ],
    "array-bracket-spacing": ["error", "never"],
    "array-callback-return": [
      "error",
      {
        "allowImplicit": false,
        "checkForEach": false
      }
    ],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": [
      "error",
      {
        "allow": ["^UNSAFE_"],
        "properties": "never",
        "ignoreGlobals": true
      }
    ],
    "comma-dangle": [
      "error",
      {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }
    ],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": [
      "error",
      "never",
      { "enforceForClassMembers": true }
    ],
    "constructor-super": "error",
    "curly": ["error", "multi-line"],
    "default-case-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": ["error", { "allowKeywords": true }],
    "eol-last": "error",
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "func-call-spacing": ["error", "never"],
    "generator-star-spacing": ["error", { "before": true, "after": true }],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "MemberExpression": 1,
        "FunctionDeclaration": { "parameters": 1, "body": 1 },
        "FunctionExpression": { "parameters": 1, "body": 1 },
        "CallExpression": { "arguments": 1 },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "ignoreComments": false,
        "ignoredNodes": [
          "TemplateLiteral *",
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        "offsetTernaryExpressions": true
      }
    ],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "lines-between-class-members": [
      "error",
      "always",
      { "exceptAfterSingleLine": true }
    ],
    "multiline-ternary": ["error", "always-multiline"],
    "new-cap": [
      "error",
      { "newIsCap": true, "capIsNew": false, "properties": true }
    ],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": ["error", { "checkLoops": false }],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-useless-backreference": "error",
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": ["error", "functions"],
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],
    "no-lone-blocks": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-prototype-builtins": "error",
    "no-useless-catch": "error",
    "no-mixed-operators": [
      "error",
      {
        "groups": [
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        "allowSamePrecedence": true
      }
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": [
      "error",
      { "max": 1, "maxBOF": 0, "maxEOF": 0 }
    ],
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-redeclare": ["error", { "builtinGlobals": false }],
    "no-regex-spaces": "error",
    "no-return-assign": ["error", "except-parens"],
    "no-self-assign": ["error", { "props": true }],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true,
        "allowTaggedTemplates": true
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "args": "none",
        "caughtErrors": "none",
        "ignoreRestSiblings": true,
        "vars": "all"
      }
    ],
    "no-use-before-define": [
      "error",
      { "functions": false, "classes": false, "variables": false }
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": [
      "error",
      { "multiline": true, "consistent": true }
    ],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      { "allowMultiplePropertiesPerLine": true }
    ],
    "one-var": ["error", { "initialized": "never" }],
    "operator-linebreak": [
      "error",
      "after",
      { "overrides": { "?": "before", ":": "before", "|>": "before" } }
    ],
    "padded-blocks": [
      "error",
      { "blocks": "never", "switches": "never", "classes": "never" }
    ],
    "prefer-const": ["error", { "destructuring": "all" }],
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": ["error", { "disallowRedundantWrapping": true }],
    "quote-props": ["error", "as-needed"],
    "quotes": [
      "error",
      "single",
      { "avoidEscape": true, "allowTemplateLiterals": false }
    ],
    "rest-spread-spacing": ["error", "never"],
    "semi": ["error", "never"],
    "semi-spacing": ["error", { "before": false, "after": true }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { "words": true, "nonwords": false }],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": { "markers": ["*package", "!", "/", ",", "="] },
        "block": {
          "balanced": true,
          "markers": ["*package", "!", ",", ":", "::", "flow-include"],
          "exceptions": ["*"]
        }
      }
    ],
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "use-isnan": [
      "error",
      {
        "enforceForSwitchCase": true,
        "enforceForIndexOf": true
      }
    ],
    "valid-typeof": ["error", { "requireStringLiterals": true }],
    "wrap-iife": ["error", "any", { "functionPrototypeMethods": true }],
    "yield-star-spacing": ["error", "both"],
    "yoda": ["error", "never"],

    "import/export": "error",
    "import/first": "error",
    "import/no-absolute-path": [
      "error",
      { "esmodule": true, "commonjs": true, "amd": false }
    ],
    "import/no-duplicates": "error",
    "import/no-named-default": "error",
    "import/no-webpack-loader-syntax": "error",

    "n/handle-callback-err": ["error", "^(err|error)$"],
    "n/no-callback-literal": "error",
    "n/no-deprecated-api": "error",
    "n/no-exports-assign": "error",
    "n/no-new-require": "error",
    "n/no-path-concat": "error",
    "n/process-exit-as-throw": "error",

    "promise/param-names": "error"
  }
}
```

Now to try and migrate to Biome…?

```bash
talon@talon-framework-debian:~/Documents/GitHubPersonal/template-linting-web$ biome migrate eslint --write
/home/talon/Documents/GitHubPersonal/template-linting-web/.eslintrc.json migrate ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ 161 ESLint rules found
    - 31 are obsolete because of Biome's formatter
    - 71 have been migrated to Biome's rules
    - 70% (114) of your ESLint rules are fully covered by Biome
      - 44% (71) via direct migration to Biome rules
  
  
  ℹ Migrated rules:
  
  - array-callback-return
  - constructor-super
  - curly
  - default-case-last
  - dot-notation
  - eqeqeq
  - no-array-constructor
  - no-async-promise-executor
  - no-case-declarations
  - no-class-assign
  - no-compare-neg-zero
  - no-const-assign
  - no-constant-condition
  - no-control-regex
  - no-debugger
  - no-dupe-args
  - no-dupe-class-members
  - no-dupe-keys
  - no-duplicate-case
  - no-empty
  - no-empty-character-class
  - no-empty-pattern
  - no-eval
  - no-ex-assign
  - no-extra-boolean-cast
  - no-fallthrough
  - no-func-assign
  - no-global-assign
  - no-import-assign
  - no-irregular-whitespace
  - no-lone-blocks
  - no-loss-of-precision
  - no-misleading-character-class
  - no-new-wrappers
  - no-obj-calls
  - no-octal-escape
  - no-prototype-builtins
  - no-redeclare
  - no-regex-spaces
  - no-self-assign
  - no-self-compare
  - no-sequences
  - no-shadow-restricted-names
  - no-sparse-arrays
  - no-template-curly-in-string
  - no-this-before-super
  - no-undef
  - no-undef-init
  - no-unneeded-ternary
  - no-unreachable
  - no-unsafe-finally
  - no-unsafe-negation
  - no-unused-expressions
  - no-unused-vars
  - no-use-before-define
  - no-useless-backreference
  - no-useless-catch
  - no-useless-computed-key
  - no-useless-constructor
  - no-useless-escape
  - no-useless-rename
  - no-var
  - no-void
  - no-with
  - one-var
  - prefer-const
  - prefer-regex-literals
  - symbol-description
  - use-isnan
  - valid-typeof
  - yoda
  
  ℹ Rules that can be migrated to an inspired rule using --include-inspired:
  
  - no-cond-assign
  - no-labels
  - no-new-func
  - no-throw-literal
  - no-useless-return
  - object-shorthand
  
  ℹ Rules that can be migrated to a nursery rule using --include-nursery:
  
  - no-implied-eval
  - no-multi-str
  - no-new
  - no-proto
  - no-return-assign
  - import/first
  
  ℹ Unsupported rules (16 incompatible with formatter, 25 made obsolete by the formatter, 6 covered by a formatter option, 30 not yet implemented, 1 unknown source):
  
  ℹ These rules enforce code styles that are incompatible with the formatter in some way:
  
  - arrow-spacing
  - brace-style
  - comma-dangle
  - comma-style
  - computed-property-spacing
  - dot-location
  - func-call-spacing
  - lines-between-class-members
  - multiline-ternary
  - no-mixed-operators
  - no-whitespace-before-property
  - padded-blocks
  - quote-props
  - space-before-function-paren
  - spaced-comment
  - wrap-iife
  
  ℹ These rules enforce behavior completely covered by the formatter (so you don't lose the functionality):
  
  - array-bracket-spacing
  - block-spacing
  - comma-spacing
  - eol-last
  - generator-star-spacing
  - key-spacing
  - keyword-spacing
  - new-parens
  - no-extra-parens
  - no-floating-decimal
  - no-multi-spaces
  - no-multiple-empty-lines
  - no-trailing-spaces
  - object-curly-newline
  - object-curly-spacing
  - object-property-newline
  - rest-spread-spacing
  - semi-spacing
  - space-before-blocks
  - space-in-parens
  - space-infix-ops
  - space-unary-ops
  - template-curly-spacing
  - template-tag-spacing
  - yield-star-spacing
  
  ℹ These rules are covered by formatter options, but they require manual migration:
  
  - indent - Covered by Biome's indentWidth formatter option.
  - no-mixed-spaces-and-tabs - Covered by Biome's indentStyle formatter option.
  - no-tabs - Covered by Biome's indentStyle formatter option.
  - operator-linebreak - Covered by Biome's operatorLinebreak formatter option.
  - quotes - Covered by Biome's quoteStyle formatter option.
  - semi - Covered by Biome's semicolons formatter option.
  
  ℹ These rules have not yet been implemented:
  
  - accessor-pairs
  - camelcase
  - new-cap
  - no-caller
  - no-delete-var
  - no-extend-native
  - no-extra-bind
  - no-invalid-regexp
  - no-iterator
  - no-new-object
  - no-new-symbol
  - no-octal
  - no-unexpected-multiline
  - no-unmodified-loop-condition
  - no-unreachable-loop
  - no-useless-call
  - prefer-promise-reject-errors
  - unicode-bom
  - import/export
  - import/no-absolute-path
  - import/no-duplicates
  - import/no-named-default
  - import/no-webpack-loader-syntax
  - n/handle-callback-err
  - n/no-callback-literal
  - n/no-deprecated-api
  - n/no-exports-assign
  - n/no-new-require
  - n/no-path-concat
  - n/process-exit-as-throw
  
  ℹ These rules originate from an eslint plugin or other tool that Biome doesn't know about:
  
  - promise/param-names
  

configuration ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ Migration results:
  
  - /home/talon/Documents/GitHubPersonal/template-linting-web/biome.json: configuration successfully migrated.
  

talon@talon-framework-debian:~/Documents/GitHubPersonal/template-linting-web$
```

Let's add those options `--include-inspired` and `--include-nursery`:

```bash
talon@talon-framework-debian:~/Documents/GitHubPersonal/template-linting-web$ biome migrate eslint --write --include-inspired --include-nursery
/home/talon/Documents/GitHubPersonal/template-linting-web/.eslintrc.json migrate ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ 161 ESLint rules found
    - 31 are obsolete because of Biome's formatter
    - 83 have been migrated to Biome's rules
    - 70% (114) of your ESLint rules are fully covered by Biome
      - 51% (83) via direct migration to Biome rules
  
  
  ℹ Migrated rules:
  
  - array-callback-return
  - constructor-super
  - curly
  - default-case-last
  - dot-notation
  - eqeqeq
  - no-array-constructor
  - no-async-promise-executor
  - no-case-declarations
  - no-class-assign
  - no-compare-neg-zero
  - no-cond-assign
  - no-const-assign
  - no-constant-condition
  - no-control-regex
  - no-debugger
  - no-dupe-args
  - no-dupe-class-members
  - no-dupe-keys
  - no-duplicate-case
  - no-empty
  - no-empty-character-class
  - no-empty-pattern
  - no-eval
  - no-ex-assign
  - no-extra-boolean-cast
  - no-fallthrough
  - no-func-assign
  - no-global-assign
  - no-implied-eval
  - no-import-assign
  - no-irregular-whitespace
  - no-labels
  - no-lone-blocks
  - no-loss-of-precision
  - no-misleading-character-class
  - no-multi-str
  - no-new
  - no-new-func
  - no-new-wrappers
  - no-obj-calls
  - no-octal-escape
  - no-proto
  - no-prototype-builtins
  - no-redeclare
  - no-regex-spaces
  - no-return-assign
  - no-self-assign
  - no-self-compare
  - no-sequences
  - no-shadow-restricted-names
  - no-sparse-arrays
  - no-template-curly-in-string
  - no-this-before-super
  - no-throw-literal
  - no-undef
  - no-undef-init
  - no-unneeded-ternary
  - no-unreachable
  - no-unsafe-finally
  - no-unsafe-negation
  - no-unused-expressions
  - no-unused-vars
  - no-use-before-define
  - no-useless-backreference
  - no-useless-catch
  - no-useless-computed-key
  - no-useless-constructor
  - no-useless-escape
  - no-useless-rename
  - no-useless-return
  - no-var
  - no-void
  - no-with
  - object-shorthand
  - one-var
  - prefer-const
  - prefer-regex-literals
  - symbol-description
  - use-isnan
  - valid-typeof
  - yoda
  - import/first
  
  ℹ Unsupported rules (16 incompatible with formatter, 25 made obsolete by the formatter, 6 covered by a formatter option, 30 not yet implemented, 1 unknown source):
  
  ℹ These rules enforce code styles that are incompatible with the formatter in some way:
  
  - arrow-spacing
  - brace-style
  - comma-dangle
  - comma-style
  - computed-property-spacing
  - dot-location
  - func-call-spacing
  - lines-between-class-members
  - multiline-ternary
  - no-mixed-operators
  - no-whitespace-before-property
  - padded-blocks
  - quote-props
  - space-before-function-paren
  - spaced-comment
  - wrap-iife
  
  ℹ These rules enforce behavior completely covered by the formatter (so you don't lose the functionality):
  
  - array-bracket-spacing
  - block-spacing
  - comma-spacing
  - eol-last
  - generator-star-spacing
  - key-spacing
  - keyword-spacing
  - new-parens
  - no-extra-parens
  - no-floating-decimal
  - no-multi-spaces
  - no-multiple-empty-lines
  - no-trailing-spaces
  - object-curly-newline
  - object-curly-spacing
  - object-property-newline
  - rest-spread-spacing
  - semi-spacing
  - space-before-blocks
  - space-in-parens
  - space-infix-ops
  - space-unary-ops
  - template-curly-spacing
  - template-tag-spacing
  - yield-star-spacing
  
  ℹ These rules are covered by formatter options, but they require manual migration:
  
  - indent - Covered by Biome's indentWidth formatter option.
  - no-mixed-spaces-and-tabs - Covered by Biome's indentStyle formatter option.
  - no-tabs - Covered by Biome's indentStyle formatter option.
  - operator-linebreak - Covered by Biome's operatorLinebreak formatter option.
  - quotes - Covered by Biome's quoteStyle formatter option.
  - semi - Covered by Biome's semicolons formatter option.
  
  ℹ These rules have not yet been implemented:
  
  - accessor-pairs
  - camelcase
  - new-cap
  - no-caller
  - no-delete-var
  - no-extend-native
  - no-extra-bind
  - no-invalid-regexp
  - no-iterator
  - no-new-object
  - no-new-symbol
  - no-octal
  - no-unexpected-multiline
  - no-unmodified-loop-condition
  - no-unreachable-loop
  - no-useless-call
  - prefer-promise-reject-errors
  - unicode-bom
  - import/export
  - import/no-absolute-path
  - import/no-duplicates
  - import/no-named-default
  - import/no-webpack-loader-syntax
  - n/handle-callback-err
  - n/no-callback-literal
  - n/no-deprecated-api
  - n/no-exports-assign
  - n/no-new-require
  - n/no-path-concat
  - n/process-exit-as-throw
  
  ℹ These rules originate from an eslint plugin or other tool that Biome doesn't know about:
  
  - promise/param-names
  

configuration ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ Migration results:
  
  - /home/talon/Documents/GitHubPersonal/template-linting-web/biome.json: configuration successfully migrated.
  

talon@talon-framework-debian:~/Documents/GitHubPersonal/template-linting-web$
```
