import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";

export const NavbarMain = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" width="100" height="47" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/avengers"
              >
                Avengers
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/star+wars"
              >
                Star Wars
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/harry+potter"
              >
                Harry Potter
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
