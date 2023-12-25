import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../../templates/Auth/Login';
import { LoginContextProvider } from 'src/contexts/Login/Login.context';

const Stack = createNativeStackNavigator();

const LoginWrapper = () => {
  return (
    <LoginContextProvider>
      <Login />
    </LoginContextProvider>
  );
};

export const AuthenticationRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={LoginWrapper} />
    </Stack.Navigator>
  );
};
