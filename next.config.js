// Hey Emacs, this is -*- coding: utf-8 -*-

/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('node:path');

const createNextPluginPreval = require('next-plugin-preval/config');

const withLinaria = require('next-with-linaria');

const withNextPluginPreval = createNextPluginPreval();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// /** @type {import('next').NextConfig} */
/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    // config.module.rules.push({
    //   test: /\.(graphql|gql)$/,
    //   exclude: /node_modules/,
    //   loader: 'graphql-tag/loader',
    // });

    // see https://github.com/vercel/next.js/discussions/14195#discussioncomment-2233891
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    // Warning
    //     null-loader is deprecated in webpack 5. use alias: { xyz$: false } or
    //     absolute path alias: {[path.resolve(__dirname, './path/to/module')]:
    //     false }
    // see https://webpack.js.org/configuration/resolve/

    // if (!isServer) {
    //   config.module.rules.push({
    //     test: /\/lib\/back\//,
    //     use: 'null-loader',
    //   });

    //   config.module.rules.push({
    //     test: /\/back-.*\//,
    //     use: 'null-loader',
    //   });
    // }

    // config.plugins.push(new webpack.EnvironmentPlugin(browserVars));

    // config.cache = false;

    return config;
  },
};

module.exports = withNextPluginPreval(
  /* eslint-disable-line */ // @ts-ignore
  withLinaria(withBundleAnalyzer(nextConfig)),
);
