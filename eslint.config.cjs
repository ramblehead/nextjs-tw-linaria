// Hey Emacs, this is -*- coding: utf-8 -*-

/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable-line */ // @ts-ignore
const config = require('@ramblehead/js-configs/nextjs/eslint.config.cjs');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'no-console': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
        allow: ['__typename', '_uid'],
      },
    ],
  },
};
