import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../templates/Auth/Login";

const Stack = createNativeStackNavigator();

export const AuthenticationRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
