import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewEventModal: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event 123</Text>
    </View>
  );
};

export default ViewEventModal;

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
});