import Modal from "react-bootstrap/Modal";

function InputModal({ children, isVisible, close, title }) {
  return (
    <Modal show={isVisible} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export default InputModal;
