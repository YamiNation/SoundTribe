import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import Home from '../screens/home/Index';
import Search from '../screens/search/Index';
import Notifications from '../screens/notifications/Index';
import ShortStories from "../screens/shortStories/Index";
import Discover from "../screens/discover/Index";
import TabContextProvider from "../components/context/Tabcontext";





const Stack = createStackNavigator();

const allRoutes = () => {
    return (
        <TabContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Search" component={Search} />
                    <Stack.Screen name="ShortStories" component={ShortStories} />
                    <Stack.Screen name="Post" component={Post} />
                    <Stack.Screen name="Discover" component={Discover} />
                    <Stack.Screen name="Notifications" component={Notifications} />
                </Stack.Navigator>
            </NavigationContainer>
        </TabContextProvider>
    )
};

