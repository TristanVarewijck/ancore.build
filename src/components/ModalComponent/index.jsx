import Modal from "react-bootstrap/Modal";

const ModalComponent = ({ title }) => {
  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
