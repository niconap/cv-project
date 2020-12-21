import React from "react";
import ReactDOM from "react-dom";
import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <header>
      <h1>CV-creator</h1>
    </header>
    <div id="content">
      <General />
      <Education />
      <Practical />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
