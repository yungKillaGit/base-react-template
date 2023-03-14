const { configure, presets } = require('eslint-kit');

module.exports = configure({
  presets: [
    presets.imports(),
    presets.typescript(),
    presets.react({
      newJSXTransform: true,
    }),
    presets.prettier(),
    presets.node(),
  ],
  extend: {
    rules: {},
  },
});
