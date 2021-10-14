import React from "react";
import Auth from "../Auth/Auth";
import { Nav, Navbar } from "react-bootstrap";

function Template(): JSX.Element {
  return (
    <Navbar bg="warning">
      <Navbar.Brand href="/">MERN App </Navbar.Brand>
      <Nav className="container-fluid">
        <Nav.Item className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-auto">
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav.Item>
        <Auth />
      </Nav>
    </Navbar>
  );
}
export default Template;
