import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";

import { getBreeds } from "../../api/getBreeds";
import type { CustomDropdownProps } from "./types";
import type { Breed } from "../../types";

export const FilterDropdown = ({
  setBreedId,
  breed_id,
  setLimit,
}: CustomDropdownProps) => {
  const [open, setOpen] = useState(false);

  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBreeds()
      .then((data) => setBreeds([{ id: 0, name: "All" }, ...data]))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <View>
      <Text className="text-gray-500 text-center mt-10">Loading Breeds List...</Text>
    </View>
  )

  if (error) return (
    <View>
      <Text className="text-red-500">Unfortunately, the following error has occured when trying to load the dog breeds: {error}</Text>
    </View>
  )

  const onSelectBreed = (item: Breed) => {
    if(item.id === 0 && setBreedId) {
      setBreedId("");
      setLimit(10);
    } else if (setBreedId) {
      setBreedId(item.id);
      setLimit(1);
    }
    setOpen(false);
  }

  const selectedBreed = breeds?.find((b) => b.id === (breed_id === "" ? 0 : breed_id));

  return (
    <View className={open ? "min-h-64" : "h-12"}>
      <TouchableOpacity
        className="border border-gray-400 p-2 rounded bg-white"
        onPress={() => setOpen((open) => !open)}
      >
        <View className="flex-row items-center justify-between">
          <Text>{selectedBreed ? selectedBreed.name : "All Breeds"}</Text>
          <View
            className="ml-2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent"
            style={{ transform: [{ rotate: open ? "180deg" : "0deg" }] }}
          />
        </View>
      </TouchableOpacity>
      {open && (
        <View className="border border-gray-400 rounded bg-white mt-1 max-h-52">
          <FlatList
            data={breeds}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }: { item: Breed }) => (
              <TouchableOpacity
                className="p-2"
                onPress={() => onSelectBreed(item)}
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

export default FilterDropdown;