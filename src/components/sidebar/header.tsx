import { WalletCards } from "lucide-react";
import {
  SidebarHeader,
  SidebarMenuButton,
  useSidebar,
} from "../shadcn_ui/sidebar";
import Logger from "@/logger";

/**
 * ### Log Instance
 */
const log = new Logger();

/**
 *
 * @returns
 */
export function AppSidebarHeader() {
  log.silly("Application Sidebar Header");

  const { toggleSidebar } = useSidebar();

  return (
    <SidebarHeader>
      <SidebarMenuButton
        onClick={() => {
          toggleSidebar();
        }}
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <WalletCards className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Personal Ledger</span>
          <span className="truncate text-xs">Catch Phrase</span>
        </div>
      </SidebarMenuButton>
    </SidebarHeader>
  );
}
