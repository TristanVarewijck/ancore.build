import { useContext, useRef, useEffect } from "react";
import { languageSetting } from "../../App";
import TextBlock from "../TextBlock";

const Services = ({ setRef }) => {
  const content = useContext(languageSetting);
  const ref = useRef(null);

  useEffect(() => {
    const servicesSection = ref.current;
    setRef(servicesSection);
  });

  const serviceElements = content.Home.Services.servicesBlocks.map(
    (i, index) => (
      <li key={`Service: ${index}`}>
        <TextBlock
          title={i.title}
          subtitle={i.subtitle}
          text={i.text}
          index={index + 1}
        />
      </li>
    )
  );

  return (
    <div ref={ref} className="services">
      <h2>{content.Home.Services.title}</h2>
      <ul>{serviceElements}</ul>
    </div>
  );
};

export default Services;
