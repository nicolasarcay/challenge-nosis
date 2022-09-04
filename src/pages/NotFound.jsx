import { Col, Container, Row } from "react-bootstrap";
import img404 from "../assets/img/404.png";
import { ButtonBack } from "../components";

export const NotFound = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={10} className="d-flex flex-column align-items-center">
            <img src={img404} alt="imagen 404" />
            <h2>Esta pagina no esta disponible, segui buscando que peliculas ver...</h2>
            <ButtonBack text={'volver al home'}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
