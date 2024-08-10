import { Button, Modal } from "react-bootstrap";

function ConfirmDialog(props) {
    return (
      <Modal
        {...props}
        size="sm"
        centered
      >
        <Modal.Body>
          <h4 className="text-center mt-5 mb-0">Order Placed!</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default ConfirmDialog
  