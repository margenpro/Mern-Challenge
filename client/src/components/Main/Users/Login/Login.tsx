import React, { useState, useContext, useEffect } from "react";
import "../../styles.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../../context/userContext";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();
  const [checkFields, setCheckFields] = useState<boolean>(false);

  const { setUserData }: any = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (email && password) {
      setCheckFields(true);
    } else {
      setCheckFields(false);
    }
  }, [email, password]);

  const submit = async (e: any) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginResponse: any = await axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      setUserData(loginResponse.data);
      sessionStorage.setItem("auth-token", loginResponse.data.token);
      history.push("/users", loginResponse.data);
    } catch (err: any) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="bg1 font">
      <h2>Login</h2>
      {error && (
        <ErrorMessage message={error} clearError={() => setError(undefined)} />
      )}
      <Form onSubmit={submit}>
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label>Password </Form.Label>
        <Form.Control
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary" type="submit" disabled={!checkFields}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
