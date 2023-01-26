import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <div style={{ margin: "0px" }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  </>
);
