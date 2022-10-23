import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

const CaseModal = ({ content, modalHandler }) => {
  return (
    <Modal show={true} fullscreen={true} onHide={() => modalHandler(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          <img
            className="img-fluid"
            src={content.images.logo}
            alt={`${content.title} logo`}
          />
        </Modal.Title>
      </Modal.Header>
      <section
        className="modal-banner section"
        style={{
          backgroundColor: `${content.backgroundColor}`,
        }}
      >
        <img
          className="banner-img"
          src={content.images.thumbnailBig}
          alt=""
          fluid
        />

        <a href="#">
          <img src="/assets/icons/arrow-down.svg" alt="arrow down icon" />
        </a>
      </section>
      <Container fluid="xxl" className="modal-description section">
        <h1>{content.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          odio? Aliquam perferendis amet repellat cumque, atque nulla possimus
          reprehenderit quia tenetur, iusto repudiandae, maiores distinctio
          similique earum non fugit cum? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Unde alias iusto vel impedit veritatis saepe itaque,
          quasi eaque voluptatem at mollitia qui est voluptas aspernatur, quis
          vero cum odio obcaecati. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro adipisci id, asperiores alias illum quis,
          neque et rem consectetur eius mollitia non ipsa sapiente quasi,
          aliquid officiis? Similique, magni ad! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aspernatur, numquam maxime adipisci
          nobis ipsa id exercitationem quam esse unde rerum accusamus, modi
          placeat est blanditiis, enim quasi dolores hic. Necessitatibus?
        </p>

        <ul className="bullet-points">
          <li>
            <h5>What we did</h5>
            <ul>
              {content.tags.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </li>
          <li>
            <h5>Employees</h5>
            <ul>
              {content.employees.map((item) => {
                return (
                  <li>
                    <a href="#">{item}</a>{" "}
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h5>Completed</h5>
            <ul>
              <li>{content.date}</li>
            </ul>
          </li>
        </ul>
        <a href="#">
          <img src="/assets/icons/arrow-up.svg" alt="arrow up icon" />
        </a>
      </Container>
    </Modal>
  );
};

export default CaseModal;
