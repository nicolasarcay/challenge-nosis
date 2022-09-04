import { Col, Container, Row } from "react-bootstrap";

export const ErrorApi = ({ hasError }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>
              Hemos tenido un error en la conexion. Por favor aguarde unos
              momentos e intente nuevamente.
            </h1>
            <p>Error: {hasError}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
