import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationRoutes } from './Auth/Authentication.routes';
import { MainRoutes } from '@routes/App/Main.routes';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Authentication'
      screenOptions={{
        headerShown: false,
        animation: 'flip',
      }}
    >
      <Stack.Screen name='Authentication' component={AuthenticationRoutes} />
      <Stack.Screen name='Home' component={MainRoutes} />
    </Stack.Navigator>
  );
};
