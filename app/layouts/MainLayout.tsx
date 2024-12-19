import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { SidebarLayout } from "./SidebarLayout";

export default function MainLayout() {

    return (
        <SidebarProvider>
            <SidebarLayout />
            <main>
                <SidebarTrigger />
                <Outlet />
            </main>
        </SidebarProvider>
    );
}
