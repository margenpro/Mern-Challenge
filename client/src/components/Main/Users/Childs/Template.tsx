import React from "react";
import "../../styles.css";
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";

function Template({
  userData,
  myChilds,
  submit,
  addChild,
  handleChange,
  showAdd,
  setShowAdd,
  showChilds,
  enableEdit,
  setEnableEdit,
}: any) {
  const renderChild = (child: any) => {
    return (
      <Row className="align-items-center p-1">
        <Col sm className="my-1">
          <FloatingLabel className="mb-3" label="First Name">
            {!enableEdit ? (
              <Form.Control type="text" value={child.firstName} disabled />
            ) : (
              <Form.Control
                type="text"
                placeholder={child.firsName}
                onChange={(e) => (child.firstName = e.target.value)}
              />
            )}
          </FloatingLabel>
        </Col>
        <Col sm className="my-1">
          <FloatingLabel className="mb-3" label="Last Name">
            {!enableEdit ? (
              <Form.Control type="text" value={child.lastName} disabled />
            ) : (
              <Form.Control
                type="text"
                placeholder={child.lastName}
                onChange={(e) => (child.lastName = e.target.value)}
              />
            )}
          </FloatingLabel>
        </Col>
        <Col sm className="my-1">
          <FloatingLabel className="mb-3" label="DNI">
            {!enableEdit ? (
              <Form.Control type="text" value={child.dni} disabled />
            ) : (
              <Form.Control
                type="text"
                placeholder={child.dni}
                onChange={(e) => (child.dni = e.target.value)}
              />
            )}
          </FloatingLabel>
        </Col>
      </Row>
    );
  };

  const renderAddChild = () => {
    return (
      <Row className="align-items-center p-1">
        <Col md>
          <Form.Group className="mb-1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter the email will use to login"
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              placeholder="Enter the password will use to login"
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Type your child's Name"
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Type your child's Last Name"
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="text"
              name="dni"
              placeholder="Type your child's Dni"
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3">
            <Button variant="primary" onClick={addChild}>
              Add
            </Button>
          </Form.Group>
        </Col>
      </Row>
    );
  };
  return (
    <div className="bg1 font">
      <Button variant="info" onClick={() => setShowAdd(!showAdd)}>
        Add Child
      </Button>
      {showChilds ? (
        <Button variant="info" onClick={() => setEnableEdit(!enableEdit)}>
          Edit Data
        </Button>
      ) : null}

      {showAdd ? renderAddChild() : null}
      {showChilds ? (
        myChilds.map((c: any) => {
          return renderChild(c);
        })
      ) : (
        <h6>You haven't loaded childs yet</h6>
      )}
      {enableEdit ? (
        <Button variant="success" onClick={submit}>
          Save Changes
        </Button>
      ) : null}
    </div>
  );
}

export default Template;
