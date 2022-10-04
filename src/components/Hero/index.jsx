import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";

function Hero() {
  return (
    <Container fluid>
      <Row className="gx-5">
        <Col sm={7}>
          <h1>WE BUILD EVERYTHING DIGITAL</h1>
          <Card style={{ width: "auto" }}>
            <Card.Img
              variant="center"
              src="https://images.unsplash.com/photo-1606829192980-9a547ffc918c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NDg3Nzg3NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900"
            />
          </Card>
        </Col>
        <Col sm={5}>
          <p>
            Donec pretium, nisl sed tempor faucibus, tortor sapien sagittis
            felis, bibendum velit est ac nisl. Proin placerat massa sit amet
            ligula
          </p>
          <Button>Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
