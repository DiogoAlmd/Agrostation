import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Logged } from "../screens/Logged/Logged";
import { SignIn } from "../screens/SignIn/SignIn";
import { Register } from "../screens/Register/Register";


 type TabParams = {
    Home: undefined;
    Reports: undefined;
    ReportBuilder: undefined;
}

export type TabTypes = BottomTabNavigationProp<TabParams>;

export const MyTab: React.FC = () => {

    
const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Logged} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="file-chart" size={30} />
                   ),
                
                   tabBarStyle: {
                    backgroundColor: "#d44a4a"
                   },
                
                   tabBarLabelStyle: {
                    fontSize: 12,
                    color: "#161416"},
                }}
                />
            <Tab.Screen name="Gerar Relatórios" component={SignIn} options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="pencil" size={30} />
                       ),
                    
                       tabBarStyle: {
                        backgroundColor: "#d44a4a"
                       },
                    
                       tabBarLabelStyle: {
                        fontSize: 12,
                        color: "#161416"},
            }}
            />
            <Tab.Screen name="Relatórios" component={Register} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="account" size={30} />
                   ),
                
                   tabBarStyle: {
                    backgroundColor: "#d44a4a"
                   },
                
                   tabBarLabelStyle: {
                    fontSize: 12,
                    color: "#161416"},
            }}
            />
        </Tab.Navigator>
    )
}