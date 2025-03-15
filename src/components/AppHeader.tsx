//-- ./src/components/AppHeader.tsx

/**
 * # Top of Main Application Page
 * 
 */

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./shadcn_ui/breadcrumb";
import { Link } from "@tanstack/react-router";
import Logger from "@/logger";
import { useTSRBreadcrumbs } from "@/hooks/useTSRBreadcrumbs";
import { SidebarTrigger } from "./shadcn_ui/sidebar";

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log = new Logger();

/**
 * # Application Header
 * 
 * @returns JSX
 */
export function AppHeader() {
  log.silly("AppHeader component");

  const breadcrumbs = useTSRBreadcrumbs();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">

      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink asChild>
                <Link to="/">Personal Ledger</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            {breadcrumbs.map((crumb, index) => (
              <BreadcrumbItem key={index}>
                <Link to={crumb.href} className="breadcrumb-link">
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
