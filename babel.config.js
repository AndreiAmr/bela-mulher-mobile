module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["transform-inline-environment-variables"],

      [
        "module-resolver",
        {
          root: ".",
          extensions: [
            ".tsx",
            ".js",
            ".jsx",
            ".ts",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          alias: {
            "@atoms": "./src/components/Atoms",
            "@molecules": "./src/components/Molecules",
            "@organisms": "./src/components/Organisms",
            "@screens": "./src/screens",
            "@templates": "./src/templates",
            "@utils": "./src/utils",
            "@stores": "./src/stores",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
