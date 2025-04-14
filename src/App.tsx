//-- ./src/App.tsx

/**
 * # React Application
 * 
 * This is the application entry point. It is responsible for creating the router 
 * instance and rendering the application.
 * 
 *  #### References
 *
 * - [](https://dev.to/khalid7487/configure-tanstack-router-into-vite-project-with-authenticate-routes-active-routes-2463)
 */

// Import dependencies
import { RouterProvider, createRouter } from "@tanstack/react-router";
import DefaultNotFound from "@/components/DefaultNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthenticationProvider, useAuthentication } from "@/contexts/AuthenticationProvider";
import { routeTree } from "./routeTree.gen";

// Import global styles
import "./index.css";

// Create a new router instance
const router = createRouter({
  // Set the default not found component to the DefaultNotFound component
  defaultNotFoundComponent: () => <DefaultNotFound />,

  // Pass the generated route tree to the router instance
  routeTree,

  scrollRestoration: true,

  context: {
    // auth will initially be undefined
    // We'll be passing down the auth state from within a React component
    authentication: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
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

// Inner App is needed to provide context to Tanstack Router
// Cannot move to App because useAuth would be outside the AuthProvider
function InnerApp() {
  // useAuth needs to be called within the <AuthProvider>
  const auth = useAuthentication();
  return <RouterProvider router={router} context={{ authentication: auth }} />;
}

// React application function
export function App() {
  return (
    // Wrap the application in authentication context provider so it is available globally
    <AuthenticationProvider>
      {/* Wrap the application in a Tanstack QueryClientProvider for context */}
      <QueryClientProvider client={queryClient}>
        <InnerApp />
      </QueryClientProvider>
    </AuthenticationProvider>
  );
}