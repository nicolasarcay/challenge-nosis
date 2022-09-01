import { useEffect, useState } from "react";
import { getMoviesTitle } from "../helpers/getMoviesTitle";

export const useFetchMovies = (titleMovie) => {
  const [movie, setMovie] = useState({
    films: [],
    isLoading: true,
    hasError: false,
  });

  const getMovies = async () => {
    setMovie({
      ...movie,
      isLoading: true,
    });

    const { films, hasError } = await getMoviesTitle(titleMovie);

    setMovie({
      films,
      isLoading: false,
      hasError,
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    films: movie.films,
    isLoading: movie.isLoading,
    hasError: movie.hasError,
  };
};
