import { useState } from "react";
import { Container } from "react-bootstrap";
import { AddMovieTitle } from "../components/AddMovieTitle";
import { MovieGrid } from "../components/MovieGrid";

export const Home = () => {
  const [movieTitle, setMovieTitle] = useState("");

  const onAddTitle = (newMovieTitle) => {
    if (movieTitle.includes(newMovieTitle)) return;
    setMovieTitle([newMovieTitle]);
  };

  return (
    <>
      <Container>
        <AddMovieTitle onNewMovieTitle={onAddTitle} />

        {movieTitle === "" ? (
          <div>algo</div>
        ) : (
          movieTitle.map((titleMovie) => (
            <MovieGrid key={titleMovie} titleMovie={titleMovie} />
          ))
        )}
        
      </Container>
    </>
  );
};
