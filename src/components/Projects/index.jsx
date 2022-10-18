import { useContext, useMemo, useState, useCallback, useEffect } from "react";
import { languageSetting } from "../../App";
import Case from "../Case";
import Link from "../Link";
import Dropdown from "react-bootstrap/Dropdown";

const Projects = () => {
  const [isCursor, setIsCursor] = useState(false);
  const [option, setOption] = useState("All");
  const [mousePos, setMousePos] = useState({
    x: null,
    y: null,
  });

  const content = useContext(languageSetting);

  const cases = useMemo(() => {
    const randomized = content.Home.Projects.cases
      .map((i) => ({
        i,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ i }) => i);
    return randomized;
  }, [content]);

  const casesElements = cases.map((i) => (
    <li key={i.id}>
      <Case
        title={i.title}
        banner={i.banner}
        tags={i.tags}
        href={`/portfolio/${i.title}`}
      />
    </li>
  ));

  const handleCursorTracking = useCallback((event) => {
    setMousePos((prevState) => {
      return {
        ...prevState,
        x: event.clientX,
        y: event.clientY,
      };
    });
  }, []);

  function sortCases(e) {
    e.preventDefault();
    const select = e.target.id;
    setOption(select);

    switch (select) {
      case "Recent":
        const casesDateSorted = cases.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        console.log(casesDateSorted);
        break;
      case "Highlighted":
        const casesHighlighted = cases.filter((i) => i.isHighlighted == true);
        console.log(casesHighlighted);
        break;
      default:
      // console.log(casesRandomized);
    }
  }

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
      <div className="section-heading">
        <h2>Our Recent Projects</h2>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {option}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item id="Recent" onClick={sortCases}>
              Recent
            </Dropdown.Item>
            <Dropdown.Item id="Highlighted" onClick={sortCases}>
              Highlighted
            </Dropdown.Item>
            <Dropdown.Item id="All" onClick={sortCases}>
              All
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
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
