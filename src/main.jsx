import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import ReactGA from "react-ga4";

// Initialize Google Analytics
ReactGA.initialize("G-P59WNG5LRY");

// Track page view
ReactGA.send("pageview");

render(<App />, document.getElementById("app"));
