import React from "react";
import { View, Text } from "react-native";

const FavouritesScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold">Favourites</Text>
      <Text className="text-gray-600">Your favorite dog photos will appear here.</Text>
    </View>
  );
};

export default FavouritesScreen;
