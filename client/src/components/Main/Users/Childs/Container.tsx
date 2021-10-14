import React, { useContext, useEffect, useState } from "react";
import Template from "./Template";
import axios from "axios";
import UserContext from "../../../../context/userContext";

function MyChilds() {
  const { userData, setUserData }: any = useContext(UserContext);
  const [myChilds, setMyChilds]: any = useState<Array<any>>([]);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [dni, setDni] = useState<string>();
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [showChilds, setShowChilds] = useState<boolean>(false);
  const [enableEdit, setEnableEdit] = useState<boolean>(false);

  useEffect(() => {
    if (userData.user) {
      getAllChilds();
    }
  }, [userData]);

  useEffect(() => {
    if (myChilds.length > 0) {
      setShowChilds(true);
    } else {
      setShowChilds(false);
    }
  }, [myChilds]);

  const getAllChilds = async () => {
    const params = {
      userId: userData.user.id,
      token: userData.token,
    };
    const childs: any = await axios.get(
      "http://localhost:5000/users/mychilds",
      { params }
    );
    setMyChilds(childs.data.childs);
  };

  const submit = async (e: any) => {
    e.preventDefault();
    const headers = { "x-auth-token": `${userData.token}` };
    const updatedUser = {
      id: userData.user.id,
      firstName: userData.user.firstName,
      lastName: userData.user.lastName,
      dni: userData.user.dni,
      childsQ: myChilds.length,
      childs: myChilds,
    };
    if (!updatedUser) {
      alert("No changes were made");
    } else {
      try {
        await axios.post("http://localhost:5000/users/edit", updatedUser, {
          headers,
        });
        setUserData({
          token: userData.token,
          user: updatedUser,
        });
        alert("Your changes were submited");
      } catch (err: any) {
        alert("Error trying to save changes");
      }
    }
  };

  const handleChange = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "dni":
        setDni(e.target.value);
        break;
      default:
        break;
    }
  };

  const registerChild = async (child: any) => {
    try {
      await axios.post("http://localhost:5000/users/register", child);
      myChilds[myChilds.length] = child;
      alert("Successfully added children");
    } catch (err: any) {
      alert("Failed to add new child");
    }
  };

  const addChild = async (e: any) => {
    const newChild = {
      email,
      password,
      passwordCheck: password,
      firstName,
      lastName,
      dni,
      childsQ: -1,
    };
    await registerChild(newChild);
    await submit(e);
  };

  return (
    <Template
      userData={userData}
      myChilds={myChilds}
      submit={submit}
      addChild={addChild}
      handleChange={handleChange}
      setShowAdd={setShowAdd}
      showAdd={showAdd}
      showChilds={showChilds}
      enableEdit={enableEdit}
      setEnableEdit={setEnableEdit}
    ></Template>
  );
}

export default MyChilds;
