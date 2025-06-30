import React from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import { CustomDropdownProps } from "./types";

export const CustomDropdown = ({
  selectedLabel,
  data,
  onSelectLabel,
  open,
  setOpen,
}: CustomDropdownProps) => {
  
  return (
    <View className={open ? "h-64" : "h-12"}>
      <TouchableOpacity
        className="border border-gray-400 p-2 rounded bg-white"
        onPress={() => setOpen((open) => !open)}
      >
        <View className="flex-row items-center justify-between">
          <Text>{selectedLabel}</Text>
          <View
            className="ml-2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent"
            style={{ transform: [{ rotate: open ? "180deg" : "0deg" }] }}
          />
        </View>
      </TouchableOpacity>
      {open && (
        <View className="border border-gray-400 rounded bg-white mt-1 max-h-52">
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-2"
                onPress={() => onSelectLabel(item)}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;