import React from "react";
import "../styles.css";

function Template(): JSX.Element {
  return (
    <div className="bg1 font">
      <h2>Welcome to my MERN Challenge</h2>
      <br />
      <p>My name is Martin Gentile and this app has been built using:</p>
      <li>MongoDB</li>
      <li>Node</li>
      <li>React</li>
      <li>Typescript</li>
    </div>
  );
}
export default Template;
