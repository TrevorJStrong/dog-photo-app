import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import DogListItem from "../../components/DogListItem";
import type { PhotoItem } from "../../types";

const HomeScreen = () => {
  const [breed_ids, setBreedIds] = React.useState([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<PhotoItem[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`${process.env.EXPO_PUBLIC_DOG_PHOTO_API}/v1/images/search?has_breeds=true&size=med&limit=10&breed_ids=${breed_ids}&api_key=${process.env.EXPO_PUBLIC_DOG_PHOTO_API_KEY}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => setIsLoading(false));
  }, [breed_ids]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <FlatList
        data={data || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item: dog}: {item: PhotoItem}) => {
          return <DogListItem dog={dog} />;
        }}
        ListEmptyComponent={
          isLoading ? (
            <Text className="text-gray-500 justify-center bg-white">Loading...</Text>
          ) : error ? (
            <Text className="text-red-500 justify-center bg-white">Error: {error}</Text>
          ) : (
            <Text className="text-gray-500 justify-center bg-white">No photos available.</Text>
          )
        }
      />
    </View>
  );
};

export default HomeScreen;
