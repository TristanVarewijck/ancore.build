import { useContext } from "react";
import { languageSetting } from "../../App";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "../Link";
import HeaderTextBlock from "../HeaderTextBlock";

const Hero = ({ scrollTo }) => {
  function scrollToFirstSection(e) {
    e.preventDefault();
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }

  const content = useContext(languageSetting);

  return (
    <div>
      <Row className="gx-5 justify-content-center align-items-top">
        <Col md={7}>
          <h1 className="mb-3">{content.Home.Hero.title}</h1>
          <img
            src="/assets/images/banner-img.png"
            className="img-fluid mb-2 banner-img"
            alt="Markup"
          />
        </Col>
        <Col md={5}>
          <p>
            Donec pretium, nisl sed tempor faucibus, tortor sapien sagittis
            felis, bibendum velit est ac nisl. Proin placerat massa sit amet
            ligula
          </p>
          <Link
            text="Get Started"
            icon={<i className="bi bi-arrow-down"></i>}
            role="button"
            type="primary"
            handleButton={scrollToFirstSection}
            href="https://www.google.com"
          />
          <Row className="flex-column justify-content-between gy-5 mt-5">
            <Col>
              <HeaderTextBlock
                title="LOREM"
                text="Donec pretium, nisl sed tempor faucibus, tortor sapien"
              />
            </Col>
            <Col>
              <HeaderTextBlock
                title="LORE"
                text="Donec pretium, nisl sed tempor faucibus, tortor sapien"
              />
            </Col>

            <Col>
              <HeaderTextBlock
                title="LO"
                text="Donec pretium, nisl sed tempor faucibus, tortor sapien"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
