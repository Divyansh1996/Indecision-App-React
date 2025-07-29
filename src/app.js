import ReactDOM from "react-dom";
import React from "react";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css";
import "./styles/styles.scss";
ReactDOM.render(<IndecisionApp options={["Option 1", "Option 2", "Option 4"]}/>, document.getElementById("newApp"));