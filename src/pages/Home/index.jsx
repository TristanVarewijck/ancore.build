import { useState } from "react";
import Container from "react-bootstrap/Container";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Quote from "../../components/Quote";
import Projects from "../../components/Projects";
import Partners from "../../components/Partners";
import Reviews from "../../components/Reviews";

const Home = () => {
  const [ref, setRef] = useState(null);
  const margin = {
    small: <div className="margin-small"></div>,
    normal: <div className="margin-normal"></div>,
  };

  return (
    <Container fluid="xxl" className="Home mt-5">
      <Hero scrollTo={ref} />
      {margin.normal}
      <Services setRef={setRef} />
      {margin.small}
      <Quote
        title="A very very cool inspiring development quote"
        icon="joystick"
      />
      {margin.small}
      <Projects />
      {margin.normal}
      <Partners />
      {margin.normal}
      <Reviews />
      {margin.normal}
      <Quote
        title="We are ready to bring it to the next level"
        icon="bug-fill"
      />
    </Container>
  );
};
export default Home;
