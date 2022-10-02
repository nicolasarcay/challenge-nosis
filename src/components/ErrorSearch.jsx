import { Col, Container, Row } from "react-bootstrap";

export const ErrorSearch = () => {
  return (
      <Container>
        <Row>
          <Col>
            <h1>
              La pelicula buscada no existe. Proba con otra palabra...
            </h1>
            <p>Sugerencias: Star Wars, Harry Potter, Avengers, El Señor de los Anillos.</p>
          </Col>
        </Row>
      </Container>
  );
};
