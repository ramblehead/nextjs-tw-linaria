#!/usr/bin/env -S yarn node
// Hey Emacs, this is -*- coding: utf-8 -*-

/* eslint-disable import/no-extraneous-dependencies */

const path = require('node:path');
const fs = require('node:fs');

const ts = require('typescript');
const prettier = require('prettier');

const resolveConfig = require('tailwindcss/resolveConfig');
// const tailwindConfig = require('../tailwind.config.cjs');

const tailwindConfigTsPath = path.join(__dirname, '../tailwind.config.ts');
const tailwindConfigTsBuffer = fs.readFileSync(tailwindConfigTsPath);

const compilerOptions = {
  module: ts.ModuleKind.CommonJS,
};

const tailwindConfigTsTranspiled = ts.transpileModule(
  tailwindConfigTsBuffer.toString(),
  {
    compilerOptions,
  },
);

const tailwindConfigCjs = Buffer.from(tailwindConfigTsTranspiled.outputText);

/* eslint-disable-line */ // @ts-ignore
const tailwindConfig = new module.constructor();

// eslint-disable-next-line no-underscore-dangle
tailwindConfig._compile(tailwindConfigCjs.toString(), tailwindConfigTsPath);

// const fullConfig = require('tailwindcss/defaultTheme');
const fullConfig = resolveConfig(tailwindConfig);

const fullConfigJson = JSON.stringify(fullConfig, undefined, 2);

const tailwindThemeStr = `// Hey Emacs, this is -*- coding: utf-8 -*-

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */

module.exports = ${fullConfigJson};
`;

(async () => {
  const tailwindThemePath = path.resolve(
    path.join(
      __dirname,
      '../src/components/theming/tailwind-config-object.cjs',
    ),
  );

  const prettierOptions = await prettier.resolveConfig(tailwindThemePath);

  const tailwindThemeFormattedStr = prettier.format(tailwindThemeStr, {
    ...prettierOptions,
    parser: 'babel',
  });

  console.log(`Writing Tailwind theme to ${tailwindThemePath}...`);

  fs.writeFileSync(tailwindThemePath, tailwindThemeFormattedStr);
})();
