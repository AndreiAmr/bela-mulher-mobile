import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginTemplate } from '@templates/Auth/Login';

const Stack = createNativeStackNavigator();

export const AuthenticationRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name='Login' component={LoginTemplate} />
    </Stack.Navigator>
  );
};
