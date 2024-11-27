import Modal from "react-bootstrap/Modal";

function InModal({ children, modalVisibility, handleClosing, title }) {
  return (
    <Modal show={modalVisibility} onHide={handleClosing}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export default InModal;
