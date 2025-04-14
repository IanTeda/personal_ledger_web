//-- ./src/routes/_protected/route.tsx

/**
 * # Protected Route Components
 *
 * Route components are used in
 *
 * #### References
 *
 * - [react-cookie](https://github.com/bendotcodes/cookies/tree/main/packages/react-cookie)
 * - [Tanstack Router Authenticated Routes](https://tanstack.com/router/latest/docs/framework/react/guide/authenticated-routes)
 * - [](https://github.com/TanStack/router/tree/main/examples/react/authenticated-routes)
 */

import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Logger from "@/logger";
import { SidebarInset, SidebarProvider } from "@/components/shadcn_ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log = new Logger();

/**
 * ## Protected Route Component
 *
 * This is the protected routes wrapper component and is run before any other routes
 * in this folder.
 */
export const Route = createFileRoute("/_protected")({
  beforeLoad: async ({ context, location }) => {
    log.silly("Before protected layout load...");

    // log.silly("context is: ", context.authentication.token);

    if (!context.authentication.token) {
      throw redirect({
        to: "/login",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
        },
      });
    }
    
  },
  component: ProtectedLayoutComponent,
});

function ProtectedLayoutComponent() {
  log.silly("Protected Layout Component");

  // TODO: Add cookie support of sidebar application settings
  // const [cookies] = useCookies();
  // const defaultOpen = cookies["personal_ledger"] || false;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        {/* Main page body of the app */}
        <div id="page" className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
