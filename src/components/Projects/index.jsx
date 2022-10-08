import { useContext } from "react";
import { languageSetting } from "../../App";
import Case from "../Case";
import Link from "../Link";

const Projects = () => {
  const content = useContext(languageSetting);
  const casesElements = content.Home.Projects.cases.map((i, index) => {
    return (
      <Case
        key={`Case: ${index}`}
        title={i.title}
        banner={i.banner}
        tags={i.tags}
        href={`/portfolio/${i.title}`}
      />
    );
  });

  return (
    <div className="projects">
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
    </div>
  );
};

export default Projects;
