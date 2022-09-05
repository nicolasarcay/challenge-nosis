import { Col, Container, Row, Badge } from "react-bootstrap";
import { ButtonBack } from "./ButtonBack";
import facebook from "../../public/assets/img/facebook.svg";
import whatsapp from "../../public/assets/img/whatsapp.svg";
import { IsLoading } from "./IsLoading";

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
  const URLactual = window.location.href;
  let poster = "";
  if (Poster != undefined) {
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
          <Row className=" justify-content-between align-items-start">
            <Col md={4} className="bg-dark p-3">
              <img src={poster} alt={Title} className="w-100" />
            </Col>
            <Col>
              <Row className="bg-dark ms-2">
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
                <Col xs={12} className="mx-0 d-flex justify-content-between ">
                  <div className="d-flex align-items-center ps-3 py-4">
                    <p className="pe-3">Costo:</p>
                    <p className="boxOffice__button">{BoxOffice}</p>
                  </div>
                  <div className="d-flex align-items-center pe-3 py-4">
                    <p>Comparti esta pelicula:</p>
                    <ul className="list-unstyled d-flex m-0 ps-2">
                      <li className="me-4">
                        <a
                          href={`https://www.facebook.com/sharer.php?u=${URLactual}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={facebook}
                            alt="icon facebook"
                            width="30"
                            height="30"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href={`whatsapp://send?text=¿Vemos%20esta%20Peli%20hoy%20a%20la%20noche?%20${URLactual}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={whatsapp}
                            alt="icon whatsapp"
                            width="30"
                            height="30"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row className="bg-dark ms-2 mt-3 mb-5">
                <Col xs={12} className="mx-0">
                  <dl className="p-3 pb-0">
                    <dt className="h5 pt-2 border-bottom border-light pb-1">
                      Descripción
                    </dt>
                    <dd className="pb-2">{Plot}</dd>
                    <dt className="h5 pt-2 border-bottom border-light pb-1">
                      Actores
                    </dt>
                    <dd className="pb-2">{Actors}</dd>
                    <dt className="h5 pt-2 border-bottom border-light pb-1">
                      Dirección
                    </dt>
                    <dd className="pb-2">{Director}</dd>
                    <dt className="h5 pt-2 border-bottom border-light pb-1">
                      Duración
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
