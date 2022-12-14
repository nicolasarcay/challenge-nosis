import { Col, Container, Row, Badge } from "react-bootstrap";
import { ButtonBack } from "./ButtonBack";
import { IsLoading } from "../components";

export const MovieDetails = ({
  Title,
  Genre,
  Year,
  Rated,
  Director,
  Runtime,
  Plot,
  Actors,
  Poster,
  BoxOffice,
}) => {
  let poster = "";
  if (Poster) {
    poster = Poster.replaceAll("N/A", "https://via.placeholder.com/300x444");
  }
  return (
    <>
      {Title == undefined ? (
        <Container className="pt-5">
          <IsLoading />
        </Container>
      ) : (
        <Container className="pt-5">
          <Row className=" justify-content-between align-items-start mx-2 mx-md-0">
            <Col md={4} className="bg-dark p-3">
              <img src={poster} alt={Title} className="w-100" />
            </Col>
            <Col>
              <Row className="bg-dark ms-md-2">
                <Col xs={12} className="mx-0 border-bottom border-light">
                  <div className="p-3 pb-1">
                    <h1>
                      {Title} - {Year}
                    </h1>
                    <div className="d-flex justify-content-between">
                      <p className="pb-3">Genero: {Genre}</p>
                      <p>Calificacion: {Rated}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} className="mx-0">
                  <Row className="justify-content-between">
                    <Col lg={6} md={12} className="py-2">
                      <div className="p-3 d-flex align-items-center">
                        <p className="pe-3">Costo:</p>
                        <p className="boxOffice__button">{BoxOffice}</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="bg-dark ms-md-2 mt-3 mb-5">
                <Col xs={12} className="mx-0">
                  <dl className="p-3 pb-0">
                    <dt className="h5 pt-2 border-bottom border-light pb-1">
                      Descripci??n
                    </dt>
                    <dd className="pb-2">{Plot}</dd>
                    <dt className="h5 pt-2 border-bottom border-light pb-1">
                      Actores
                    </dt>
                    <dd className="pb-2">{Actors}</dd>
                    <dt className="h5 pt-2 border-bottom border-light pb-1">
                      Direcci??n
                    </dt>
                    <dd className="pb-2">{Director}</dd>
                    <dt className="h5 pt-2 border-bottom border-light pb-1">
                      Duraci??n
                    </dt>
                    <dd className="pb-2">{Runtime}</dd>
                  </dl>
                </Col>
                <Col xs={12} className="pb-4 d-flex justify-content-end">
                  <ButtonBack text={"volver"} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
