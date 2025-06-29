export const getBreeds = async () => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_DOG_PHOTO_API}/v1/breeds?limit=50&api_key=${process.env.EXPO_PUBLIC_DOG_PHOTO_API_KEY}`
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};