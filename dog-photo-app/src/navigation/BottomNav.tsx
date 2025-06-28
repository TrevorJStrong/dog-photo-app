import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import CalendarEventsScreen from "../screens/Events";

import type { RootTabParamList } from "./types";

const Tab = createBottomTabNavigator<RootTabParamList>();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="CalendarEventsTab" 
        component={CalendarEventsScreen}
        options={{
          tabBarLabel: 'Events',
          headerShown: true,
          headerTitle: 'Dog Events',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;