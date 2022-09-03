import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardMovie = ({ title, url, type, year, id }) => {
  
  const poster = url.replaceAll("N/A", "https://via.placeholder.com/300x444");

  return (
    <>
      <Col
        md={2}
        xs={12}
        className="card__movie"
      >
        <Link to={`/movie/${id}`} className="card__movie__link">
          <img src={poster} alt={title} className="card__movie-img" />
          <p className="text-center px-3 pt-3">{type}</p>
          <h2 className="h4 px-3 text-center">{title}</h2>
          <p className="px-3">{year}</p>
        </Link>
      </Col>
    </>
  );
};
