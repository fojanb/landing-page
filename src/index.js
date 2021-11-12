import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <div className="bg-hero bg-cover bg-center bg-fixed bg-no-repeat relative min-h-screen galaxy:bg-sm sm:bg-sm sm:overflow-x-hidden ">
        <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
