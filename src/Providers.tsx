import { PropsWithChildren } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { glueStackConfig } from './styles/gluestack-ui.config';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={glueStackConfig}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          {children}
        </GestureHandlerRootView>
      </GluestackUIProvider>
    </NavigationContainer>
  );
};
