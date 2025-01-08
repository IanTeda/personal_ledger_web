//-- ./src/main.tsx

// # Main entry point
//
// This is the main entry point of the application. It is responsible for creating 
// the router instance and rendering the application.

// Import dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import global styles
import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the application
createRoot(document.getElementById("root")!).render(
  // Wrap the application in a React StrictMode
  <StrictMode>
    {/* // Pass the router instance to the RouterProvider */}
    <RouterProvider router={router} />
  </StrictMode>
);
