import React from "react"
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Register } from "../screens/Register/Register";
import { Home } from "../screens/Home/Home";
import { SignIn } from "../screens/SignIn/SignIn";
import { CreatedAccount } from "../screens/CreatedAccount/CreatedAccount";
import { Logged } from "../screens/Logged/Logged";



type StackParams = {
  Home: undefined;
  Register: undefined;
  SignIn: undefined;
  CreatedAccount: undefined;
  Logged: undefined;
}

export type StackTypes =  StackNavigationProp<StackParams>;

export const MyStack: React.FC = () => {
  const Stack = createStackNavigator<StackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Logged" component={Logged} options={{ headerShown: false}}/>
      <Stack.Screen name="CreatedAccount" component={CreatedAccount} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};