import React, { useState, useContext, useEffect } from "react";
import "../../styles.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../../context/userContext";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { Form, Button } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordCheck, setPasswordCheck] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [dni, setDni] = useState<string>();
  const [error, setError] = useState();
  const [checkFields, setCheckFields] = useState<boolean>(false);
  const { setUserData }: any = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (
      email &&
      password &&
      password === passwordCheck &&
      firstName &&
      lastName &&
      dni
    ) {
      setCheckFields(true);
    } else {
      setCheckFields(false);
    }
  }, [email, password, passwordCheck, firstName, lastName, dni]);

  const submit = async (e: any) => {
    e.preventDefault();

    try {
      const newUser = {
        email,
        password,
        passwordCheck,
        firstName,
        lastName,
        dni,
      };
      await axios.post("http://localhost:5000/users/register", newUser);
      const loginResponse: any = await axios.post(
        "http://localhost:5000/users/login",
        {
          email,
          password,
        }
      );
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      sessionStorage.setItem("auth-token", loginResponse.data.token);
      history.push("/users");
    } catch (err: any) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="bg1 font">
      <h2>Register</h2>
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
        <Form.Control
          className={
            password === passwordCheck
              ? "form-control"
              : "is-invalid form-control"
          }
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <Form.Label>First Name </Form.Label>
        <Form.Control
          type="text"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Label>Last Name </Form.Label>
        <Form.Control
          type="text"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Label>DNI </Form.Label>
        <Form.Control
          type="text"
          id="dni"
          onChange={(e) => setDni(e.target.value)}
        />

        <Button variant="primary" type="submit" disabled={!checkFields}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
