import { useState } from "react";
import Container from "react-bootstrap/Container";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Quote from "../../components/Quote";
import Projects from "../../components/Projects";
import Partners from "../../components/Partners";
import Reviews from "../../components/Reviews";
import Contact from "../../components/Contact";
import AutoType from "../../functions/AutoType";

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
        title={"We believe that everything Web should be"}
        icon="joystick"
        animatedLastWord={
          <AutoType
            words={["Functional", "Designed", "lightning fast", "helpfull"]}
            forwardSpeed={150}
            backwardSpeed={150}
            isLoop={true}
          />
        }
      />
      {margin.small}
      <Projects />
      {margin.normal}
      <Partners />
      {margin.small}
      <Reviews />
      {margin.normal}
      <Quote
        title={"We are ready to bring it to the next"}
        icon="bug-fill"
        animatedLastWord={
          <AutoType
            words={["Step", "High", "Level", "Planet"]}
            forwardSpeed={150}
            backwardSpeed={150}
            isLoop={true}
          />
        }
      />
      {margin.normal}
      <Contact />
      {margin.small}
    </Container>
  );
};
export default Home;
