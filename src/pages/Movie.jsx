import { useParams } from "react-router-dom"
import { MovieDetails } from "../components";
import { useFetchMovie } from "../hooks/useFetchMovie";

export const Movie = () => {
    
    const { id } = useParams();

    const {film} = useFetchMovie( id )

    console.log(film)

  return (
    <>
        <MovieDetails key={id} {...film} />
    </>
  )
}
