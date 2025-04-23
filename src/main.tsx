import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// import Login from "./auth/Login";
// import Registration from "./auth/Registration";
// import Test from "./Test";


import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
