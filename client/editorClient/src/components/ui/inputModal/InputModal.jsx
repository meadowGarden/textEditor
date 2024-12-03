import Modal from "react-bootstrap/Modal";
import "./InputModal.css";

function InputModal({ children, isVisible, close, title }) {
  return (
    <Modal show={isVisible} onHide={close}>
      <Modal.Header className="inputModalHeader">
        <Modal.Title className="inputModalTitle">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="inputModalBody">{children}</Modal.Body>
    </Modal>
  );
}

export default InputModal;
