import React from "react";
import { View, Text } from "react-native";

const ViewEventModal = ({ route }: any) => {
  const { event } = route.params;
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">{event?.title}</Text>
      <Text className="text-lg text-gray-600">{event?.description}</Text>
    </View>
  );
};

export default ViewEventModal;