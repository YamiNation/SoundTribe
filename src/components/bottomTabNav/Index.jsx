import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/home/Index";
import ShortStories from "../../screens/shortStories/Index";
import Discover from "../../screens/discover/Index";
import Search from "../../screens/search/Index";
import AddButton from "../addButton/Index";
import Notifications from "../../screens/notifications/Index";
import { useTabMenu } from "../context/Tabcontext";

const Tab = createBottomTabNavigator;
const TabNavigator = () => {
  const { opened, toggleOpened } = useTabMenu();

  return (
    <Tab.Navigator initialRouteName={Home}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="ShortStories" component={ShortStories} />
      <Tab.Screen name="Post" component={Home} 
      options={{
        tabBarStyle:{
          height:0,
        },
        tabBarButton: ()=> (
          <AddButton opened={opened} toggleOpened={toggleOpened}/>
        )
      }}/>
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Notifications" component={Notifications} />
     
    </Tab.Navigator>
  );
};

export default TabNavigator;
