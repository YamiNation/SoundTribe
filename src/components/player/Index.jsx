import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/home/Index';

const Tab = createBottomTabNavigator();
const Index = () => {
  return (
  <Tab.Navigator initialRouteName='Home'>
    <Tab.Screen name="List" component={Home}
    options={{
        tabBarButton: ()=>{}
    }}/>
    <Tab.Screen name="Artist" component={Home}
    options={{
        tabBarButton: ()=>{}
    }}/>
    <Tab.Screen name="Back" component={Home}
    options={{
        tabBarButton: ()=>{}
    }}/>
    <Tab.Screen name="Play" component={Home}
    options={{
        tabBarButton: ()=>{}
    }}/>
    <Tab.Screen name="Forward" component={Home}
    options={{
        tabBarButton: ()=>{}
    }}/>
    <Tab.Screen name="Like" component={Home}
    options={{
        tabBarButton: ()=>{}
    }}/>
    <Tab.Screen name="Switch" component={Home}
    options={{
        tabBarButton: ()=>{}
    }}/>
  </Tab.Navigator>
  )
}

export default Index