import { useEffect, useState } from "react";
import { getMovie } from "../helpers/getMovie";

export const useFetchMovie = ( id ) => {

  const [movie, setMovie] = useState({
    isLoading: true,
  });

  const getMovieData = async () => {
    setMovie({
      isLoading: true,
    });

    const resp = await getMovie (id);
    
    setMovie({
      film: resp.movie,
      isLoading: false,
    });
  };

  useEffect(() => {
    getMovieData();
  }, []);
  
  return {
    film: movie.film,
    isLoading: movie.isLoading,
  };
};
