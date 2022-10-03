import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MainNav() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="assets/branding/logo.svg" alt="ancore build logo" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>Russian</NavDropdown.Item>
              <NavDropdown.Item>Turkish</NavDropdown.Item>
              <NavDropdown.Item>Netherlands</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button>Contact Us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
