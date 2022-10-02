import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

export const NavbarMain = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="bg-dark">
        <Link to="/">
          <Navbar.Brand className="bg-dark">
            <img src={logo} alt="logo" width="100" height="47" />
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};
