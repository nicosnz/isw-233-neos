/** @type {import("stylelint").Config} */
export default {
  
  "extends": ["stylelint-config-standard"],
  "plugins": ["stylelint-selector-bem-pattern"],
  "rules": {
    "plugin/selector-bem-pattern": {
      "preset": "bem"
    },
    "selector-class-pattern": [
      "^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$",
      {
        "message": "Expected class selector to follow BEM naming convention"
      }
    ],
    "declaration-block-single-line-max-declarations": 2,
    "color-no-invalid-hex": true,
    "block-no-empty": true,
    "no-duplicate-selectors": true,
    "declaration-no-important": true
  }

};
