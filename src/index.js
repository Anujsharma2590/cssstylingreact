import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

const style = (
  <div>
    <h1 style={customStyle}>Hello World!</h1>
  </div>
);
ReactDOM.render(style, document.getElementById("root"));
