import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Case = ({ title, banner, tags }) => {
  const [show, setShow] = useState();
  const tagsElements = tags.map((i, index) => {
    return <span key={index}>{i}</span>;
  });

  console.log("i v been created!");

  return (
    <div className="case">
      {show && (
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal>
      )}

      <a type="button" role="button" onClick={() => setShow(true)}>
        <section>
          <h5>{title}</h5>
          <div className="banner-container">
            <img src={banner} className="banner img-fluid" alt="Case Banner" />
          </div>
          <div>{tagsElements}</div>
        </section>
      </a>
    </div>
  );
};

export default Case;
