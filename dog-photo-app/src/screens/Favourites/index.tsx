import React from "react";
import { View, Text, FlatList } from "react-native";

import DogListItem from "../../components/DogListItem";
import { useFavourites } from "../../hooks/useFavourites";
import type { PhotoItem } from "../../types";

const FavouritesScreen = () => {
  const { favourites, loading } = useFavourites();

  if (loading) {
    return <Text>Loading Favourites...</Text>;
  }

  if (favourites?.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-bold">No Favourites</Text>
        <Text className="text-gray-600">You have no favourite dog photos yet.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={favourites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item: dog}: {item: PhotoItem}) => {
          return <DogListItem dog={dog} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FavouritesScreen;
