import { useContext, useMemo, useState, useCallback } from "react";
import { languageSetting } from "../../App";
import Case from "../Case";
import Link from "../Link";

const Projects = () => {
  const [customCursor, setCustomCursor] = useState([false]);
  const content = useContext(languageSetting);
  const cases = content.Home.Projects.cases;

  // setCustomCursor(!customCursor);

  useCallback(() => {
    console.log("loggggging");
  }, customCursor);

  const casesElements = useMemo(() => {
    return cases.map((i, index) => (
      <li key={`Case: ${index}`}>
        <Case
          title={i.title}
          banner={i.banner}
          tags={i.tags}
          href={`/portfolio/${i.title}`}
        />
      </li>
    ));
  }, [cases]);

  console.log(cases);

  return (
    <div
      className="projects"
      onMouseEnter={() => setCustomCursor([true])}
      onMouseLeave={() => setCustomCursor([false])}
    >
      <h2>Our Recent Projects</h2>
      <ul>{casesElements}</ul>
      <div className="link-to-portfolio">
        <Link
          className="portfolio-link"
          text="See more Cases"
          role="link"
          type="primary"
          href="/portfolio"
          icon="clipboard2-heart-fill"
        />
      </div>
      {/* {customCursor && (
        <div className="customCursor">This is my new Cursor!</div>
      )} */}
    </div>
  );
};

export default Projects;
