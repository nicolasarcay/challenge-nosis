import { Col } from "react-bootstrap";

export const CardMovie = ({title, url, type, year}) => {

  const poster = url.replaceAll("N/A", "https://via.placeholder.com/300x444")
  
  return (
    <>
      <Col md={2} xs={12} className="d-flex flex-column align-content-center px-md-0 px-5 card__movie">
        <img
          src={ poster }
          alt={ title }
          className="card__movie-img"
        />
        <p>{ type }</p>
        <h2>{ title }</h2>
        <p>{ year }</p>
      </Col>
    </>
  );
};
