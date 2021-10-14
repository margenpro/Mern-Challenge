import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../context/userContext";
import { Nav, NavDropdown } from "react-bootstrap";

function Auth() {
  const { userData, setUserData }: any = useContext(UserContext);
  const history = useHistory();
  const register = () => history.push("/users/register");
  const login = () => history.push("/users/login");
  const logout = () => {
    setUserData({
      token: "",
      user: undefined,
    });
    sessionStorage.setItem("auth-token", "");
    history.push("/");
  };
  const edit = () => history.push("/users/edit", userData);
  const childs = () => history.push("/users/childs", userData);
  return (
    <Nav.Item className="ms-auto">
      {userData.user ? (
        <NavDropdown title={`Hello ${userData.user.firstName}`}>
          <NavDropdown.Item href="/users/edit">Profile</NavDropdown.Item>
          <NavDropdown.Item href="/users/childs">My Childs</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      ) : (
        <NavDropdown
          title="My Account"
          menuVariant="dark"
          className="text-dark"
        >
          <NavDropdown.Item href="/users/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/users/register">Sign Up</NavDropdown.Item>
        </NavDropdown>
      )}
    </Nav.Item>
  );
}
export default Auth;
