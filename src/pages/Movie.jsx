import { useParams } from "react-router-dom";
import { MovieDetails } from "../components";
import { useFetchMovie } from "../hooks";

export const Movie = () => {
  const { id } = useParams();

  const { film } = useFetchMovie(id);

  return <MovieDetails key={id} {...film} />;
};
