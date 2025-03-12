import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.css";
import { Teashop } from "./Teashop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Teashop />
  </StrictMode>
);
