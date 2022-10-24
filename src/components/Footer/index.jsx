import Container from "react-bootstrap/Container";

const Footer = () => {
  const socials = [
    {
      icon: "twitter",
      link: "#",
    },
    {
      icon: "telegram",
      link: "#",
    },

    {
      icon: "linkedin",
      link: "#",
    },
  ];

  const socialElements = socials.map((i, index) => {
    return (
      <li key={i.icon}>
        <a href={i.link}>
          <span>
            <i className={`bi bi-${i.icon}`}></i>
          </span>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <Container fluid="xxl">
        <div>
          <section>
            <img src="assets/branding/logo.svg" alt="ancore build logo" />
            <ul>{socialElements}</ul>
          </section>
        </div>

        {/* links */}
        <div>
          <section className="pages">
            <h6>Pages</h6>
            <ul>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
            </ul>
          </section>

          <section className="resources">
            <h6>Resources</h6>
            <ul>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
            </ul>
          </section>

          <section className="contact">
            <h6>Contact us</h6>
            <ul>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
            </ul>
          </section>

          <section className="company">
            <h6>Company</h6>
            <ul>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
              <li>
                <a href="#">lorem ispum</a>
              </li>
            </ul>
          </section>
        </div>
      </Container>
      <div>
        <p>© 2022 ANCORE Build. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
