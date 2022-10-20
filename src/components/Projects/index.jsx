import { useContext, useState, useCallback, useEffect } from "react";
import { languageSetting } from "../../App";
import Case from "../Case";
import Link from "../Link";
import DropdownComponent from "../Dropdown";

// !! check if everything is performance optimized !!
const Projects = () => {
  const content = useContext(languageSetting);
  const cases = content.Home.Projects.cases;

  const [isCursor, setIsCursor] = useState();
  const [option, setOption] = useState("New/old");
  const [mousePos, setMousePos] = useState({
    x: null,
    y: null,
  });
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

  const sortCases = (e) => {
    e.preventDefault();
    const select = e.target.id;

    setOption(select);
    switch (select) {
      case "New/Old":
        console.log("new old");
        cases.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "Old/New":
        console.log("old new");
        cases.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "A/Z":
        console.log("az");
        cases.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        console.error("error in sorting");
        break;
    }
  };

  useEffect(() => {
    cases.sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [content]);

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
        <DropdownComponent
          optionHandler={sortCases}
          options={["New/Old", "Old/New", "A/Z"]}
          selected={option}
        ></DropdownComponent>
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
