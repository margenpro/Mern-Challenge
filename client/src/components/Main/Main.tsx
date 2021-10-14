import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Container";
import Users from "./Users/Container";
import Login from "./Users/Login/Login";
import Register from "./Users/Register/Register";
import Edit from "./Users/Edit/Container";
import NavBar from "./NavBar/Container";
import MyChilds from "./Users/Childs/Container";
import UserContext from "../../context/userContext";
import axios from "axios";
import { IUserData } from "../../interfaces/IUserData";
import "bootstrap/dist/css/bootstrap.min.css";

function Main(): JSX.Element {
  const [userData, setUserData] = useState<IUserData>({
    token: "",
    user: undefined,
  });

  useEffect(() => {
    const validateLogin = async () => {
      let token = sessionStorage.getItem("auth-token");
      if (token === null) {
        sessionStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:5000/users/validateToken",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({ token, user: userRes.data });
      }
    };
    validateLogin();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
          <Route exact path="/users/edit" component={Edit} />
          <Route exact path="/users/childs" component={MyChilds} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default Main;
