import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { languageSetting } from "../../App";
function MainNav({ languageSetter }) {
  const content = useContext(languageSetting);

  return (
    <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="assets/branding/logo.svg" alt="ancore build logo" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "auto" }}
            navbarScroll
          >
            <Nav.Link href="/portfolio">{content.Navbar.portfolio}</Nav.Link>
            <Nav.Link href="/services">{content.Navbar.services}</Nav.Link>
            <Nav.Link href="/about">{content.Navbar.about}</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={content.language} id="navbarScrollingDropdown">
              <NavDropdown.Item id="EN" onClick={languageSetter}>
                󠁧󠁢󠁥󠁮󠁧🇬🇧 English
              </NavDropdown.Item>
              <NavDropdown.Item id="RU" onClick={languageSetter}>
                🇷🇺 Russian
              </NavDropdown.Item>
              <NavDropdown.Item id="TR" onClick={languageSetter}>
                🇹🇷 Turkish
              </NavDropdown.Item>
              <NavDropdown.Item id="DU" onClick={languageSetter}>
                🇳🇱 Dutch
              </NavDropdown.Item>
            </NavDropdown>
            <br />
          </Nav>

          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className="contactButton"
          >
            <p>{content.Navbar.contact}</p>
            <img src="/assets/icons/arrow-right.svg" alt="arrow right icon" />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
