//-- ./src/components/TanStackDevTools.tsx
 
// # TanStackDevTools Component
//
// Component that adds Tan Stack development tools to the app when in development
// mode only.
//
// ## References
//
// - [TanStack Router Devtools Docs](https://tanstack.com/router/latest/docs/framework/react/devtools)
// - [axelrindle/mjml.app](https://github.com/axelrindle/mjml.app/blob/main/src/components/Devtools.tsx

// Import the necessary modules
import { lazy, Suspense } from "react";

// Lazy load the TanStackRouterDevtools component
const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

const TanStackQueryDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/react-query-devtools").then((res) => ({
          default: res.ReactQueryDevtools,
        }))
      );

// Export the TanStackDevTools component
export default function TanStackDevTools() {
  return (
    <>
      {/* // Wrap the TanStackRouterDevtools component in a Suspense component so it falls back after loading */}
      <Suspense>
        <TanStackRouterDevtools position="bottom-left" />
        <TanStackQueryDevtools buttonPosition="bottom-right" />
      </Suspense>
    </>
  );
}
