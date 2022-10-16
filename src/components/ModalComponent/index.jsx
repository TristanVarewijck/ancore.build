import Modal from "react-bootstrap/Modal";
const ModalComponent = (props) => {
  return (
    <Modal
      show={true}
      fullscreen={true}
      onHide={() => props.modalHandler(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
