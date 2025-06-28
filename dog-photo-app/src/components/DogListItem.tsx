import React from "react";
import { View, Text, Image } from "react-native";

import type { PhotoItem } from "../types";

const DogListItem = ({dog}: { dog: PhotoItem }) => {
  return (
    <View className="p-4 border-b border-gray-200">
      <Text className="text-lg font-bold">{dog.breeds[0]?.name ?? "Unknown Breed"}</Text>
      <Text className="text-gray-500">{dog.breeds[0]?.bred_for ?? "No description available."}</Text>
      <Image
        source={{ uri: dog.url }}
        className="w-full h-64 mt-2 rounded-lg"
      />
    </View>
  );
};

export default DogListItem;