import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTemplate } from '@templates/Home';
const Stack = createNativeStackNavigator();

export const MainRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name='Home' component={HomeTemplate} />
    </Stack.Navigator>
  );
};
