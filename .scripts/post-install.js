const { readFileSync, writeFileSync } = require('fs-extra');

const content = readFileSync('./node_modules/normalize.css/normalize.css');

writeFileSync('./src/style/vendor/normalize.css.scss', `/* stylelint-disable plugin/no-unsupported-browser-features,property-no-vendor-prefix,font-family-no-duplicate-names */
/*
 * THIS FILE IS AUTO-GENERATED - DO NOT MODIFY
 * It's being generated from the "normalize.css" package to be a usable mixin.
 */

@mixin vendor-normalize-css {
${content}
}
`);
