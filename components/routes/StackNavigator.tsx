import React from "react"
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Register } from "../screens/Register/Register";
import { Home } from "../screens/Home/Home";
import { SignIn } from "../screens/SignIn/SignIn";
import { CreatedAccount } from "../screens/CreatedAccount/CreatedAccount";
import { Logged } from "../screens/Logged/Logged";
import { MyTab } from "./TabNavigator";
import CreateReports from "../screens/createReports/CreateReports";
import StepScreen from "../screens/createReports/StepScreen";
import { CoffeeArticle } from "../screens/articles/CoffeeArticle/CoffeeArticle";
import { CaatingaArticle } from "../screens/articles/CaatingaArticle/CaatingaArticle";
import { SummerArticle } from "../screens/articles/SummerArticle/SummerArticle";
import { SafrasArticle } from "../screens/articles/SafraArticle/SafraArticle";
import { SudesteArticle } from "../screens/articles/SudesteArticle/SudesteArticle";
import { Reports } from "../screens/Reports/Reports";


type StackParams = {
  Home: undefined;
  Register: undefined;
  SignIn: undefined;
  CreatedAccount: undefined;
  Logged: undefined;
  Tab: undefined;
  CreateReports: undefined;
  StepScreen: undefined;
  Cafe: undefined;
  Caatinga: undefined;
  Verao: undefined;
  Safras: undefined;
  Sudeste: undefined;
  Reports: undefined;
}

export type StackTypes =  StackNavigationProp<StackParams>;

export const MyStack: React.FC = () => {
  const Stack = createStackNavigator<StackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Tab" component={MyTab} options={{ headerShown: false}}/>
      <Stack.Screen name="CreatedAccount" component={CreatedAccount} options={{ headerShown: false }}/>
      <Stack.Screen name="Cafe" component={CoffeeArticle} options={{ headerShown: false }}/>
      <Stack.Screen name="Caatinga" component={CaatingaArticle} options={{ headerShown: false }}/>
      <Stack.Screen name="Verao" component={SummerArticle} options={{ headerShown: false }}/>
      <Stack.Screen name="Safras" component={SafrasArticle} options={{ headerShown: false }}/>
      <Stack.Screen name="Sudeste" component={SudesteArticle} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateReports" component={CreateReports} options={{ headerShown: false }}/>
      <Stack.Screen name="StepScreen" component={StepScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Reports" component={Reports} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};