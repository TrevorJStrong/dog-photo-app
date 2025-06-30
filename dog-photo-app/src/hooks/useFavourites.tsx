import { useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";
import type { PhotoItem } from "../types";

export function useFavourites() {
  const [favourites, setFavourites] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchFavourites();
  }, []);

  return { favourites, loading };
}