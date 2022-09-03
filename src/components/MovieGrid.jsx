import React from "react";
import { Row } from "react-bootstrap";
import { useFetchMovies } from "../hooks";
import {ErrorApi, CardMovie, ErrorSearch, IsLoading} from '../components'


export const MovieGrid = ({ titleMovie }) => {
  
  const { films, isLoading, hasError } = useFetchMovies(titleMovie);

  if (hasError) return <ErrorApi hasError={hasError} />;

  return (
    <>
      {films.length == 0 && !isLoading ? (
        <ErrorSearch />
      ) : (
        <Row className="justify-content-center py-4">
          {isLoading ? (
            <IsLoading />
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
