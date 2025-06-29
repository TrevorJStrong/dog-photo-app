import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLocalStorage = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error("Error retrieving data from local storage:", error);
    return null;
  }
}

export const setLocalStorage = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Error setting data in local storage:", error);
  }
};