import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';

import type { RootTabParamList } from "./types";
import EventsStack from "./EventStack";

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
        component={EventsStack}
        options={{
          tabBarLabel: 'Events',
          headerTitle: 'Events',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;