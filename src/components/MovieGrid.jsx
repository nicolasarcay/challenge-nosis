import React from "react";
import { Row } from "react-bootstrap";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { CardMovie } from "./CardMovie";
import { ErrorApi } from "./ErrorApi";
import { ErrorSearch } from "./ErrorSearch";

export const MovieGrid = ({ titleMovie }) => {
  
  const { films, isLoading, hasError } = useFetchMovies(titleMovie);

  if (hasError) return <ErrorApi hasError={hasError} />;

  return (
    <>
      {films.length == 0 && !isLoading ? (
        <ErrorSearch />
      ) : (
        <Row className="justify-content-between py-4">
          {isLoading ? (
            <div>Estamos cargando</div>
          ) : (
            <>
              {films.map((film) => (
                <CardMovie key={film.id} {...film} />
              ))}
            </>
          )}
        </Row>
      )}
    </>
  );
};
