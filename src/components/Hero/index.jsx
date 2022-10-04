import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Hero() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="center" src="holder.js/100px180" />
          </Card>
        </Col>
        <Col sm={4}>sm=4</Col>
      </Row>
    </Container>
  );
}

export default Hero;
