import React from "react";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold">Welcome to the Dog Photo App!</Text>
      <Text className="text-gray-600">Explore and share your favorite dog photos.</Text>
    </View>
  );
};

export default HomeScreen;
