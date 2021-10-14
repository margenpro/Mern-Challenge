import React, { useState, useContext, useEffect } from "react";
import Template from "./Template";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../../context/userContext";
import { IUserData, IChildData } from "../../../../interfaces/IUserData";

function Edit() {
  const [error, setError] = useState<string>();
  const { userData, setUserData }: any = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const _user = {
    firstName: "",
    lastName: "",
    dni: "",
    childsQ: 0,
    childs: [],
  };
  const [firstName, setFirstName] = useState<string>(_user.firstName);
  const [lastName, setLastName] = useState<string>(_user.lastName);
  const [dni, setDni] = useState<string>(_user.dni);
  const [childsQ, setChildsQ] = useState<Number>(_user.childsQ);
  const [childs, setChilds] = useState<Array<IChildData>>(_user.childs);

  const submit = async (e: any) => {
    e.preventDefault();
    const updatedUser = {
      id: userData.user.id,
      firstName,
      lastName,
      dni,
      childsQ,
      childs,
    };
    if (!updatedUser) {
      alert("No changes were made");
    } else {
      try {
        const headers = { "x-auth-token": `${userData.token}` };
        const updateResponse: any = await axios.post(
          "http://localhost:5000/users/edit",
          updatedUser,
          { headers }
        );
        setUserData({
          user: updateResponse.data,
        });
        alert("Your changes were submited");
        const _userData = { user: updateResponse.data, token: userData.token };
        // history.push("/users", _userData);
      } catch (err: any) {
        alert("Error trying to save changes");
      }
    }
  };

  return (
    <Template
      submit={submit}
      userData={userData}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setDni={setDni}
    ></Template>
  );
}
export default Edit;
