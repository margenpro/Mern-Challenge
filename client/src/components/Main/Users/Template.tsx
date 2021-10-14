import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

function Template({ userData }: any): JSX.Element {
  return (
    <div className="bg1 font">
      {userData.user ? (
        <h1>Welcome {userData.user.firstName}</h1>
      ) : (
        <>
          <h2>Please Login to continue</h2>
          <Link to="/users/login">Login</Link>
        </>
      )}
    </div>
  );
}
export default Template;
