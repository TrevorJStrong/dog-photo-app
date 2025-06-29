import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import FavouritesScreen from '../screens/Favourites';

import type { HomeStackParamList } from './types';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: 'Dog Photos',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Favourites")}>
              <Text>Favourites</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen 
        name="Favourites" 
        component={FavouritesScreen}
      />
    </Stack.Navigator>
  );
};