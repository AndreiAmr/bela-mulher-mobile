import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginTemplate } from '@templates/Auth/Login';
import { LoginContextProvider } from '@contexts/Login/Login.context';

const Stack = createNativeStackNavigator();

const LoginWrapper = () => {
  return (
    <LoginContextProvider>
      <LoginTemplate />
    </LoginContextProvider>
  );
};

export const AuthenticationRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name='Login' component={LoginWrapper} />
    </Stack.Navigator>
  );
};
