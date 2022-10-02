import { Link } from "react-router-dom";

export const ButtonBack = ({ text }) => {
  return (
    <Link to={`/`} className="pt-4">
      <p className="btn btn-primary text-uppercase text-white">{text}</p>
    </Link>
  );
};
