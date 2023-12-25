import { createComponents, createConfig } from "@gluestack-style/react";
import { gluestackUIConfig } from "@gluestack-ui/config";

export const glueStackConfig = createConfig({
  aliases: {
    bg: "backgroundColor",
    mt: "marginTop",
  },
  tokens: {
    colors: {
      background: "#1B2A3E",
      gray100: "#FBFBFB",
      gray200: "#E6E6E6",

      green800: "#233957",
      green700: "#1B2A3E",
    },
  },
});

type Config = typeof gluestackUIConfig; // Assuming `config` is defined elsewhere

type Components = typeof componentsConfig;

export const componentsConfig = createComponents({});

export type { UIConfig, UIComponents } from "@gluestack-ui/themed";

export interface IConfig {}
export interface IComponents {}

declare module "@gluestack-ui/themed" {
  interface UIConfig extends Omit<Config, keyof IConfig>, IConfig {}
  interface UIComponents
    extends Omit<Components, keyof IComponents>,
      IComponents {}
}

export const config = {
  ...gluestackUIConfig,
  components: componentsConfig,
};
