import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";
import contacts from "./contacts";

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App />
  </div>,
  document.getElementById("root")
);
