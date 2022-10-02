import { Col, Row, Spinner } from "react-bootstrap";

export const IsLoading = () => {
  return (
    <Row>
      <Col className="d-flex">
        <Spinner animation="border" variant="primary" />
        <p className="h3 ps-3">
          Estamos Cargando las peliculas... ¿Preparaste los pochoclos?
        </p>
      </Col>
    </Row>
  );
};
