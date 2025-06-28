import React from "react";
import { View, Text } from "react-native";

const CalendarEventsScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold">Calendar Events</Text>
      <Text className="text-gray-600">Manage your dog-related events here.</Text>
    </View>
  );
};

export default CalendarEventsScreen