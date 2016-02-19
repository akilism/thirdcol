import "babel-polyfill";
import {default as React} from "react";
import {default as ReactDOM} from "react-dom";

import {default as ReactRoot} from "./ReactRoot";

import {} from "../styles/reset.css";
import {} from "../styles/fonts.css";
import {} from "../styles/main.css";

ReactDOM.render(<ReactRoot />, document.getElementById("react-container"));
