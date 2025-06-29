import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { getLocalStorage } from "../../utils/localStorage";
import DogListItem from "../../components/DogListItem";
import { PhotoItem } from "../../types";

const FavouritesScreen = () => {
  const [favourites, setFavourites] = useState<PhotoItem[]>([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const data = await getLocalStorage("favourites");
        if (data) {
          setFavourites(JSON.parse(data));
        } else {
          setFavourites([]);
        }
      } catch (error) {
        console.error("Error fetching favourites:", error);
        setFavourites([]);
      }
    };

    fetchFavourites();
  }, []);

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
