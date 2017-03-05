#!/usr/bin/env node
'use strict';

var path = require('path');
var fs = require('fs-extra');

var componentName;

var program = require('commander')
  .version(require('./package.json').version)
  .arguments('<component-directory>')
  .action(function (name) {
    componentName = name;
  })
  .option('-p, --pure', 'Create Pure Function Component')
  .option('-c, --css', `Add ${componentName}.css`)
  .parse(process.argv)

createComponent(componentName);

function createComponent(name) {
  var root = path.resolve(name);

  if (!fs.existsSync(root)) {
    fs.mkdirSync(root);
  }

  var cssLine = ''
  if (program.css) {
    fs.writeFileSync(
      path.join(root, `${name}.css`),
      `/*\n<Project Name> CSS Module\n${name}\n*/\n`
    )
    cssLine = `import s from './${name}.css'\n\n`
  }

  if (program.pure) {
    fs.writeFileSync(
      path.join(root, `${name}.js`),
      `/*\n<Project Name> Component\n${name}\n*/\n` +
      `import React from 'react'\n` +
      cssLine +
      `const ${name} = (props) => {\n` +
        `\treturn (\n` +
          `\t\t<div>\n\t\t</div>\n` +
        `\t)\n` +
      `}\n\n` +
      `export default ${name}`
    )
  } else {
    fs.writeFileSync(
      path.join(root, `${name}.js`),
      `/*\n<Project Name> Component\n${name}\n*/\n` +
      `import React, { Component } from 'react'\n` +
      cssLine +
      `class ${name} extends Component {\n\n` +
        `\tcomponentDidMount() {\n` +
        `\t}\n\n` +
        `\trender() {\n` +
          `\t\treturn (\n` +
          `\t\t)\n\n` +
        `\t}\n\n` +
      `}\n\n` +
      `export default ${name}`
    )
  }

  console.log(`Component ${name} created`);
}
