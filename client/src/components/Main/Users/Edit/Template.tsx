import React from "react";
import "../../styles.css";
import { Form, Button } from "react-bootstrap";

function Template(props: any) {
  const {
    submit = props.submit,
    userData = props.userData,
    setFirstName = props.setFirstName,
    setLastName = props.setLastName,
    setDni = props.setDni,
  } = props;
  return (
    <div className="align-items-center p-1 bg1 font">
      {userData.user ? (
        <Form onSubmit={submit}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.user.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.user.lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.user.dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </Form.Group>
          <br />

          <Form.Group className="mb-3">
            <Button variant="info" type="submit">
              Save
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Template;
