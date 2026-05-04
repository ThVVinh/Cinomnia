import { useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./modal-styles.css";
import "./profile-photo.css";
import { Image as ImageIcon, Plus } from "react-bootstrap-icons";
import { useAuth } from "../../auth/useAuth";
import { ChangePwdModal } from "./ChangePwdModal";

export function ProfileView() {
  const fileRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();
  const [preview, setPreview] = useState<string | null>(null);

  const handleSelect = () => {
    fileRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Only JPG or PNG allowed");
      return;
    }

    setPreview(URL.createObjectURL(file));
  };
  return (
    <Container fluid className="p-0 m-0" style={{ overflow: "hidden" }}>
      <div className="text-start">
        <h1 className="mb-4 mt-3">
          <b>My Settings</b>
        </h1>
      </div>
      <Row>
        <Col md={4} className="">
          <div className="d-grid gap-4 text-start">
            <h2 className="text-secondary fw-semibold mb-3">Profile Photo</h2>
            <div className="upload-placeholder" onClick={handleSelect}>
              {preview ? (
                <Image src={preview} fluid />
              ) : (
                <div className="icon-wrapper">
                  <ImageIcon size={40} />
                  <span className="plus-icon">
                    <Plus size={12} />
                  </span>
                </div>
              )}
            </div>

            <p className="text-muted small text-center">
              Accept file type .jpg or .png
            </p>

            <Button
              variant="outline-secondary"
              size="lg"
              onClick={handleSelect}
            >
              Change image
            </Button>

            <Form.Control
              ref={fileRef}
              type="file"
              accept="image/png,image/jpeg"
              hidden
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col>
          <div className="profile-card ps-4 pe-4">
            <Row>
              <Col md={6} className="mb-4 text-start">
                <Form.Label
                  htmlFor="fname"
                  className="text-secondary fw-semibold mb-3"
                >
                  <h2>ID</h2>
                </Form.Label>
                <InputGroup className="mb-3" size="lg">
                  <Form.Control
                    id="fname"
                    aria-describedby="fname"
                    value={user?.id}
                    readOnly
                  />
                </InputGroup>
              </Col>
              <Col md={6} className="mb-4 text-start">
                <Form.Label
                  htmlFor="lname"
                  className="text-secondary fw-semibold mb-3"
                >
                  <h2>Name</h2>
                </Form.Label>
                <InputGroup className="mb-3" size="lg">
                  <Form.Control
                    id="lname"
                    aria-describedby="lname"
                    value={user?.name}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-4 text-start">
                <FormLabel
                  htmlFor="email"
                  className="text-secondary fw-semibold mb-3"
                >
                  <h2>Email Address</h2>
                </FormLabel>
                <InputGroup className="mb-3" size="lg">
                  <Form.Control
                    placeholder="Your email address"
                    aria-label="Your email address"
                    aria-describedby="basic-addon2"
                    id="email"
                    value={user?.email.trim().split("@")[0]}
                    readOnly
                  />
                  <InputGroup.Text>@gmail.com</InputGroup.Text>
                </InputGroup>
              </Col>
              <Col md={6} className="mb-4 text-start">
                <Form.Label
                  htmlFor="pwd"
                  className="text-secondary fw-semibold mb-3"
                >
                  <h2>Password</h2>
                </Form.Label>
                <Form.Control
                  type="password"
                  id="pwd"
                  aria-describedby="passwordHelpBlock"
                  disabled
                  value="********"
                  className="mb-2"
                  size="lg"
                />
                <ChangePwdModal />
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-4 text-start">
                <FormLabel
                  htmlFor="email"
                  className="text-secondary fw-semibold mb-3"
                >
                  <h2>Gender</h2>
                </FormLabel>
                <Form.Select defaultValue={user?.gender || ""} size="lg">
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Col>
              <Col md={6} className="mb-4 text-start">
                <Form.Label
                  htmlFor="dob"
                  className="text-secondary fw-semibold mb-3"
                >
                  <h2>Date of Birth</h2>
                </Form.Label>
                <InputGroup size="lg">
                  <Form.Control
                    type="date"
                    name="dob"
                    value={user?.dob || ""}
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>
          <Button
            variant="outline-secondary bg-primary"
            size="lg"
            className="mt-4"
          >
            <b className="text-light">Save Changes</b>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
