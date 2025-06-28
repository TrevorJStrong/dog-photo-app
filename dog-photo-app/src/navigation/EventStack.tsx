import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalendarEventsScreen from '../screens/Events';
import ViewEventModal from '../screens/Events/ViewEventModal';

import type { EventsStackParamList } from './types';

const Stack = createNativeStackNavigator<EventsStackParamList>();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CalendarEvents" 
        component={CalendarEventsScreen} 
      />
      <Stack.Screen 
        name="ViewEvent"
        component={ViewEventModal}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};