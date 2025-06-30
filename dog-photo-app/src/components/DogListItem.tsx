import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Toast from "react-native-toast-message";

import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import type { PhotoItem } from "../types";

const DogListItem = ({dog}: { dog: PhotoItem }) => {
  const [isFavourite, setIsFavourite] = React.useState<boolean>(false);
  
  const addDogToFavourites = async (dog: PhotoItem) => {
    const existingFavourites = await getLocalStorage("favourites");
    let favourites = [];

    if (existingFavourites) {
      try {
        favourites = JSON.parse(existingFavourites);
      } catch {
        favourites = [];
      }
    }

    if (!favourites.some((fav: any) => fav.id === dog.id)) {
      const dogAdded = [...favourites, dog];
      await setLocalStorage("favourites", JSON.stringify(dogAdded));
      setIsFavourite(true);
      Toast.show({
        type: 'success',
        text1: 'Added to Favourites',
        text2: `${dog.breeds[0]?.name} has been added to your favourites.`,
        position: 'bottom',
      });
    } else {
      const dogRemoved = favourites.filter((fav: any) => fav.id !== dog.id);
      await setLocalStorage("favourites", JSON.stringify(dogRemoved));
      setIsFavourite(false);
      Toast.show({
        type: 'info',
        text1: 'Removed from Favourites',
        text2: `${dog.breeds[0]?.name} has been removed from your favourites.`,
        position: 'bottom',
      });
    }
  };

  useEffect(() => {
    const checkIfFavourite = async () => {
      const existingFavourites = await getLocalStorage("favourites");
      if (existingFavourites) {
        const favourites = JSON.parse(existingFavourites);
        setIsFavourite(favourites.some((fav: any) => fav.id === dog.id));
      } else {
        setIsFavourite(false);
      }
    };
    checkIfFavourite();
  }, []);

  return (
    <View className="p-4 border-b border-gray-200">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-bold">{dog.breeds[0]?.name}</Text>
          <Text className="text-gray-500">{dog.breeds[0]?.bred_for ?? "No description available."}</Text>
        </View>
        <TouchableOpacity onPress={() => addDogToFavourites(dog)}>
          <AntDesign name={isFavourite ? "heart" : "hearto"} size={20} color="red" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: dog.url }}
        className="w-full h-64 mt-2 rounded-lg"
      />
    </View>
  );
};

export default DogListItem;