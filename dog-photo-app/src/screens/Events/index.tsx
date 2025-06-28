import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CalendarEventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar Events</Text>
      <Text style={styles.subtitle}>Manage your dog-related events here.</Text>
    </View>
  );
};

export default CalendarEventsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});