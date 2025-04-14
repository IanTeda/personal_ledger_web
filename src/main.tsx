//-- ./src/main.tsx

/**
 * # Main Entry Point
 *
 * This is the main entry point of the React application.
 *
 */

// Import dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// Import global styles
import "./index.css";

// Render the React application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
