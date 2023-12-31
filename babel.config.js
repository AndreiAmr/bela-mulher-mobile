module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['transform-inline-environment-variables'],

      [
        'module-resolver',
        {
          root: '.',
          extensions: [
            '.tsx',
            '.js',
            '.jsx',
            '.ts',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            '@atoms': './src/components/Atoms',
            '@molecules': './src/components/Molecules',
            '@organisms': './src/components/Organisms',
            '@screens': './src/screens',
            '@templates': './src/templates',
            '@utils': './src/utils',
            '@store': './src/infra/stores',
            '@assets': './src/assets',
            '@routes': './src/infra/routes',
            '@http': './src/infra/http',
            '@services': './src/infra/services',
            '@hooks': './src/infra/hooks',
            '@contexts': './src/infra/contexts',
            '@types/': './src/types/',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
