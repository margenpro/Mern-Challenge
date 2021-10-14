import React, { useContext, useEffect } from "react";
import Template from "./Template";
import { useHistory, useLocation } from "react-router-dom";
import UserContext from "../../../context/userContext";

function Container(): JSX.Element {
  return (
    <UserContext.Consumer>
      {(userData) => <Template userData={userData?.userData}></Template>}
    </UserContext.Consumer>
  );
}
export default Container;
