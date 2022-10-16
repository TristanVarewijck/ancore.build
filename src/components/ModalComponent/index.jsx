import Modal from "react-bootstrap/Modal";
const ModalComponent = ({ title, modalHandler }) => {
  return (
    <Modal show={true} fullscreen={true} onHide={() => modalHandler(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
