import {
  Sidebar,
  SidebarSeparator,
} from "@/components/shadcn_ui/sidebar";
import { AppSidebarHeader } from "./sidebar/header";
import { AppSidebarContent } from "./sidebar/content";
import { AppSidebarFooter } from "./sidebar/footer";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <AppSidebarHeader />
      <SidebarSeparator />
      <AppSidebarContent />
      <AppSidebarFooter {...props} />
    </Sidebar>
  );
}
