import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationRoutes } from "./Auth/Authentication.routes";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Authentication"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Authentication" component={AuthenticationRoutes} />
    </Stack.Navigator>
  );
};
