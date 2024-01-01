import { PropsWithChildren } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { glueStackConfig } from './styles/gluestack-ui.config';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <GluestackUIProvider config={glueStackConfig}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            {children}
          </GestureHandlerRootView>
        </GluestackUIProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
