const moduleResolver = [
    'module-resolver',
    {
      root: ['./'],
      alias: {
        components: './src/components',
        config: './config',
        helpers: './src/helpers',
        pages: '.src/pages',
        assets: './src/assets',
      },
    },
  ];
  
  module.exports = {
    env: {
      test: {
        plugins: [
          'polished',
          'transform-dynamic-import',
        ],
      },
    },
    plugins: [
      ['styled-components', { ssr: true, displayName: true, preprocess: false }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ["@babel/plugin-proposal-private-methods", { "loose": true }],
      ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
      moduleResolver,
    ],
    presets: ['@babel/preset-env', '@babel/preset-react' ],
  };
  