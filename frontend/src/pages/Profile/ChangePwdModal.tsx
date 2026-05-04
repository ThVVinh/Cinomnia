import { useState } from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import "./modal-styles.css";
import "./profile-photo.css";

export function ChangePwdModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="text-end">
        <a
          role="button"
          className="text-primary mt-2 d-inline-block"
          onClick={handleShow}
        >
          Change Password
        </a>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="newPassword">New Password *</Form.Label>
              <Form.Control
                id="newPassword"
                aria-describedby="newPasswordHelpBlock"
                type="password"
              />
              <Form.Text id="newPasswordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>

            <FormGroup className="mb-4">
              <Form.Label htmlFor="confirmNewPassword">
                Confirm New Password *
              </Form.Label>
              <Form.Control
                id="confirmNewPassword"
                aria-describedby="confirmNewPassword"
                type="password"
              />
            </FormGroup>
          </Form>
          <Button
            variant="primary"
            className="w-100"
            size="lg"
            onClick={() => setShow(false)}
          >
            Save
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
