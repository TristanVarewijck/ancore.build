import { useContext } from "react";
import { languageSetting } from "../../App";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "../Link";

const Hero = ({ scrollTo }) => {
  function scrollToFirstSection(e) {
    e.preventDefault();
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }

  const content = useContext(languageSetting);
  return (
    <div className="Hero">
      <Row className="gx-5 justify-content-center align-items-center pb-5">
        <Col>
          <h1 className="mb-3">{content.Home.Hero.title}</h1>
        </Col>
        <Col>
          <p>
            Donec pretium, nisl sed tempor faucibus, tortor sapien sagittis
            felis, bibendum velit est ac nisl. Proin placerat massa sit amet
            ligula
          </p>
          <Link
            text="Get Started"
            icon="arrow-down-square-fill"
            role="button"
            type="primary"
            handleButton={scrollToFirstSection}
            href="https://www.google.com"
          />
        </Col>
      </Row>
      <Row>
        <Col className="image-container">
          <img src="/assets/images/banner-img.png" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
