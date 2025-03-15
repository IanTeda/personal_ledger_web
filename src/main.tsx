//-- ./src/main.tsx

/**
 * ### Main Entry Point
 * 
 * This is the main entry point of the application. It is responsible for creating
 * the router instance and rendering the application.
 * 
 * #### References
 * 
 * - [](https://dev.to/khalid7487/configure-tanstack-router-into-vite-project-with-authenticate-routes-active-routes-2463)
 */

// Import dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import global styles
import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Import the DefaultNotFound component for use in the router instance configuration below
import DefaultNotFound from "./components/DefaultNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new router instance
const router = createRouter({
  // Set the default not found component to the DefaultNotFound component
  defaultNotFoundComponent: () => <DefaultNotFound />,

  // Pass the generated route tree to the router instance
  routeTree,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Initiate a new Tanstack Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

// Render the application
createRoot(document.getElementById("root")!).render(
  // Wrap the application in a React StrictMode
  <StrictMode>
    {/* // Wrap the application in a Tanstack QueryClientProvider for context */}
    <QueryClientProvider client={queryClient}>
        {/* // Pass the router instance to the RouterProvider */}
        <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
