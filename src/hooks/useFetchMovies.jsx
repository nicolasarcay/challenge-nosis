import { useEffect, useState } from "react";
import { getMoviesTitle } from "../helpers/getMoviesTitle";

export const useFetchMovies = (titleMovie) => {
  const [movie, setMovie] = useState({
    films: [],
    isLoading: true,
    hasError: false,
  });

  const getMovie = async () => {
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
    getMovie();
  }, []);

  return {
    films: movie.films,
    isLoading: movie.isLoading,
    hasError: movie.hasError,
  };
};
