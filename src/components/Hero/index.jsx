import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/button";

function Hero() {
  return (
    <Container fluid="xxl" className="mt-5">
      <Row className="gx-5 justify-content-center align-items-top">
        <Col lg={7}>
          <h1 className="mb-3">WE BUILD EVERYTHING DIGITAL</h1>

          <img
            src="/assets/images/banner-img.png"
            className="img-fluid mb-2"
            alt="Responsive image"
          />
        </Col>
        <Col lg={5}>
          <p>
            Donec pretium, nisl sed tempor faucibus, tortor sapien sagittis
            felis, bibendum velit est ac nisl. Proin placerat massa sit amet
            ligula
          </p>
          <Button>Get Started</Button>

          <div className="info-1">
            <h5>LOREM</h5>
            <p>Donec pretium, nisl sed tempor faucibus, tortor sapien</p>
          </div>

          <div className="info-1">
            <h5>LOREM</h5>
            <p>Donec pretium, nisl sed tempor faucibus, tortor sapien</p>
          </div>

          <div className="info-1">
            <h5>LOREM</h5>
            <p>Donec pretium, nisl sed tempor faucibus, tortor sapien</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
