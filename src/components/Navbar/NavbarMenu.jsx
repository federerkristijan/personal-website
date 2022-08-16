import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

import Logo from "../../assets/images/kf_logo.png";
import Logo2 from "../../assets/images/kf_logo2.png";
import { Link } from "react-scroll";
import Toggle from "./Toggle/Toggle";
import { themeContext } from "../../Context";
import { useContext } from "react";

const NavbarMenu = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Navbar className="navbar" bg="light" expand="lg" style= {{ background: "white" }} >
      <Container>
        <div className="n-left">
          <div className="n-logo">
            <Link to="contact" spy={true} smooth={true}>
              {darkMode ? (
                <img src={Logo2} alt="logo" height="60rem" width="60rem" />
              ) : (
                <img src={Logo} alt="logo" height="60rem" width="60rem" />
              )}
            </Link>
          </div>
          <Toggle />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="n-list">
              <ul>
                <li>
                  <Nav.Link href="#about" spy={true} smooth={true}>
                    About
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#portfolio" spy={true} smooth={true}>
                    Portfolio
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#skills" spy={true} smooth={true}>
                    Skills
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
