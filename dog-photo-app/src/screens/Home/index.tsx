import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import DogListItem from "../../components/DogListItem";
import { FilterDogBreeds } from "../../components/dropdown/FilterDogBreeds";
import type { PhotoItem } from "../../types";

const HomeScreen = () => {
  const [breed_id, setBreedId] = React.useState<string | number>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<PhotoItem[]>([]);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`${process.env.EXPO_PUBLIC_DOG_PHOTO_API}/v1/images/search?has_breeds=true&size=med&limit=${limit}&breed_ids=${breed_id}&api_key=${process.env.EXPO_PUBLIC_DOG_PHOTO_API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [breed_id]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="p-4 w-full">
        <FilterDogBreeds
          setBreedId={setBreedId}
          breed_id={breed_id}
          setLimit={setLimit}
        />
      </View>
      <FlatList
        data={data ?? []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item: dog}: {item: PhotoItem}) => {
          return <DogListItem dog={dog} />;
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 items-center mt-40">
            {isLoading ? (
              <Text className="text-gray-500 justify-center bg-white">Loading Dog Photos...</Text>
            ) : error ? (
              <Text className="text-red-500 justify-center bg-white">The following error has occured when trying to load the dog photos: {error}</Text>
            ) : (
              <Text className="text-gray-500 justify-center bg-white">No photos available.</Text>
            )}
          </View>
        }
      />
    </View>
  );
};

export default HomeScreen;
