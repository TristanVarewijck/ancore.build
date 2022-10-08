import { useState } from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Container from "react-bootstrap/Container";

const Home = () => {
  const [ref, setRef] = useState(null);

  console.log(ref);
  return (
    <Container fluid="xxl" className="Home mt-5">
      <Hero scrollTo={ref} />
      <Services setRef={setRef} />
    </Container>
  );
};
export default Home;
