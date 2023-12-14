module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: [
    "inline-react-svg",
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/': './src/',
          'tests/*': './tests/*',
        },
      },
    ],
  ],
};
