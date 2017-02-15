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
  .parse(process.argv)

createComponent(componentName);

function createComponent(name) {
  var root = path.resolve(name);

  if (!fs.existsSync(root)) {
    fs.mkdirSync(root);
  }

  fs.writeFileSync(
    path.join(root, `${name}.js`),
    `/*\n<Project Name> Component\n${name}\n*/\n` +
    `import React from 'react'\n` + 
    `import s from './${name}.css'\n\n` + 
    
    `const ${name} = ({ props }) => {\n` +
      `\treturn (\n` +
        `\t\t<div>\n\t\t</div>\n` +
      `\t)\n` + 
    `}\n\n` +
    `export default ${name}`
  )

  fs.writeFileSync(
    path.join(root, `${name}.css`),
    `/*\n<Project Name> CSS Module\n${name}\n*/\n`
  )

  console.log(`Component ${name} created`);
}
  // process.chdir(root);

