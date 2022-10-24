import { useContext, useRef, useEffect } from "react";
import { languageSetting } from "../../App";
import TextBlock from "../TextBlock";
import Accordion from "react-bootstrap/Accordion";

const Services = ({ setRef }) => {
  const content = useContext(languageSetting);
  const ref = useRef(null);

  useEffect(() => {
    const servicesSection = ref.current;
    setRef(servicesSection);
  });

  const serviceElements = content.Home.Services.servicesBlocks.map(
    (i, index) => (
      <Accordion.Item eventKey={`${index}`} key={i.title}>
        <Accordion.Header>
          <TextBlock
            title={i.title}
            subtitle={i.subtitle}
            text={i.text}
            index={index + 1}
          />
        </Accordion.Header>

        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    )
  );

  return (
    <div ref={ref} className="services">
      <h2>{content.Home.Services.title}</h2>
      <Accordion>{serviceElements}</Accordion>
    </div>
  );
};

export default Services;
