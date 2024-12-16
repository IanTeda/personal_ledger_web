import LogoutPage from "~/logout/page";
import type { Route } from "./+types/logout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Personal Ledger" },
    { name: "description", content: "Logout landing page for Personal Ledger" },
  ];
}

export default function Logout() {
  return <LogoutPage />;
}
