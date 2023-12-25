import { PropsWithChildren } from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { glueStackConfig } from "./styles/gluestack-ui.config";
import { NavigationContainer } from "@react-navigation/native";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={glueStackConfig}>
        {children}
      </GluestackUIProvider>
    </NavigationContainer>
  );
};
