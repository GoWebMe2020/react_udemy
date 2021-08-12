import React from "react";
import ReactDOM from "react-dom"; // importing react-dom from react which is a dependency - in the package.json. part of the react library

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root")); // render is a function of react-dom that takes 2 arguments.
