//-- ./src/components/sidebar/content.tsx

/**
 * # Sidebar Content
 * 
 * Component for rendering the application sidebar.
 * 
 * Will check the browser url and match to set link as active.
 * 
 * //TODO: Consider moving menu_items into AppSidebar for clarity
 * 
 * #### References
 * 
 * - [yenes11/system-x](https://github.com/yenes11/system-x/blob/main/components/nav-main.tsx)
 */

import {
  Building2,
  ChartColumnStacked,
  Group,
  LayoutDashboard,
  Proportions,
  ScrollText,
  Tags,
} from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../shadcn_ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";
import Logger from "@/logger";

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log = new Logger();

// Menu items.
const menu_items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Ledgers",
    url: "/ledgers",
    icon: ScrollText,
  },
  {
    title: "Budgets",
    url: "/budgets",
    icon: ChartColumnStacked,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: Proportions,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: Group,
  },
  {
    title: "Tags",
    url: "/tags",
    icon: Tags,
  },
  {
    title: "Payees",
    url: "/payees",
    icon: Building2,
  },
];

export function AppSidebarContent() {
  log.silly("App Sidebar Content Component")

  // Get current url from Tanstack Router
  const route = useLocation();
  // log.silly("Current: ", current);

  // Set SidebarMenuButton active if route pathname equails or starts with link url
  const isActive = (link_url: string) =>
    route.pathname === link_url ||
    (route.pathname.startsWith(link_url) && link_url !== "/");

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {menu_items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActive(item.url)}>
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
