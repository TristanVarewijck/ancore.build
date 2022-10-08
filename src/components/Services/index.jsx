import { useContext, useRef, useEffect } from "react";
import { languageSetting } from "../../App";

const Services = ({ setRef }) => {
  const content = useContext(languageSetting);
  const ref = useRef(null);

  useEffect(() => {
    const servicesSection = ref.current;
    setRef(servicesSection);
  });

  const serviceElements = content.Home.Services.servicesBlocks.map(
    (i, index) => {
      return (
        <li key={`Service: ${index}`}>
          <div>
            <p>{index}</p>
          </div>

          <div>
            <h5>{i.title}</h5>
            <p>{i.subtitle}</p>
          </div>

          <div>
            <p>{i.text}</p>
          </div>
        </li>
      );
    }
  );

  return (
    <div ref={ref} className="services">
      <h2>{content.Home.Services.title}</h2>
      <ul>{serviceElements}</ul>
    </div>
  );
};

export default Services;
