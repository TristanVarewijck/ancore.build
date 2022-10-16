import { useContext, useMemo, useState, useCallback, useEffect } from "react";
import { languageSetting } from "../../App";
import Case from "../Case";
import Link from "../Link";

const Projects = () => {
  const [isCursor, setIsCursor] = useState(false);
  const content = useContext(languageSetting);
  const cases = content.Home.Projects.cases;
  const [mousePos, setMousePos] = useState({
    x: null,
    y: null,
  });

  // memoirize lists (unchanging)
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

  const handleCursorTracking = useCallback((event) => {
    setMousePos((prevState) => {
      return {
        ...prevState,
        x: event.clientX,
        y: event.clientY,
      };
    });
  }, []);

  useEffect(() => {
    isCursor
      ? window.addEventListener("mousemove", handleCursorTracking)
      : window.removeEventListener("mousemove", handleCursorTracking);
    return () => window.removeEventListener("mousemove", handleCursorTracking);
  }, [isCursor, handleCursorTracking]);

  return (
    <div
      className="projects"
      onMouseEnter={() => setIsCursor(true)}
      onMouseLeave={() => setIsCursor(false)}
      style={{ cursor: "none" }}
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
      {isCursor && (
        <div
          className="customCursor"
          style={{
            transform: `translate3d(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%), 0)`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Projects;
