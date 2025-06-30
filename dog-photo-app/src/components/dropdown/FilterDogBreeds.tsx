import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { getBreeds } from "../../api/getBreeds";
import type { FilterProps } from "./types";
import type { Breed } from "../../types";
import CustomDropdown from "./CustomDropdown";

export const FilterDogBreeds = ({
  setBreedId,
  breed_id,
  setLimit,
}: FilterProps) => {
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
    <CustomDropdown 
      selectedLabel={selectedBreed ? selectedBreed.name : "All Breeds"}
      data={breeds}
      onSelectLabel={onSelectBreed}
      open={open}
      setOpen={setOpen}
    />
  );
};

export default FilterDogBreeds;