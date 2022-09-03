import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img404 from "../assets/img/404.png";

export const NotFound = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={10} className="d-flex flex-column align-items-center">
            <img src={img404} alt="imagen 404" />
            <h2>Pagina No encontrada</h2>
            <Link to={`/`}>
              <p className="btn btn-primary">Volver</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
