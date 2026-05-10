/** @type {import("stylelint").Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-plugin-defensive-css/configs/strict',
    'stylelint-plugin-logical-css/configs/recommended',
    'stylelint-config-concentric-order'
  ],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-high-performance-animation',
    'stylelint-no-browser-hacks',
    'stylelint-no-unsupported-browser-features',
    'stylelint-plugin-defensive-css',
    'stylelint-plugin-logical-css',
    'stylelint-plugin-use-baseline',
    'stylelint-value-no-unknown-custom-properties'
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-low-performance-animation-properties': true,
    'plugin/no-browser-hacks': [true],
    'plugin/no-unsupported-browser-features': [true],
    'plugin/use-baseline': true,
    'csstools/value-no-unknown-custom-properties': true,
    'comment-empty-line-before': null
  }
}
