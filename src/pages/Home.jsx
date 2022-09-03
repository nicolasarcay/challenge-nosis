import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddMovieTitle, MovieGrid } from "../components";

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
          <Row>
            <Col>
              <h2 className="py-4">¿Queres Maratonear y no sabes que pelis ver?</h2>
              <p>Nosotros te ayudamos, pone una palabra y te saldran todas las peliculas que la contengan. No lo pienses mucho y empeza a disfrutar</p>
            </Col>
          </Row>
        ) : (
          movieTitle.map((titleMovie) => (
            <MovieGrid key={titleMovie} titleMovie={titleMovie} />
          ))
        )}
      </Container>
    </>
  );
};
