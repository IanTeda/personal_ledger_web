//-- ./src/routes/_protected/route.tsx

/**
 * # Potected Route Components
 * 
 * Route components are used in 
 * 
 * #### References
 * 
 * - [react-cookie](https://github.com/bendotcodes/cookies/tree/main/packages/react-cookie)
 * 
 */

import { createFileRoute, Outlet } from '@tanstack/react-router'
import Logger from '@/logger'
import { SidebarInset, SidebarProvider } from "@/components/shadcn_ui/sidebar";
import { AppSidebar } from '@/components/AppSidebar';
import { AppHeader } from '@/components/AppHeader';
// import { useCookies } from "react-cookie";

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log = new Logger()

/**
 * ## Protected Route Component
 * 
 */
export const Route = createFileRoute('/_protected')({
  beforeLoad: () => {
    log.silly("Before protected layout load...");

  },
  component: ProtectedLayoutComponent,
})

function ProtectedLayoutComponent() {
  log.silly('Protected Layout Component')

  // TODO: Add cookie support of sidebar applicatoin settings
  // const [cookies] = useCookies();
  // const defaultOpen = cookies["personal_ledger"] || false;

  // log.silly("defaultOpen: ", defaultOpen);

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
