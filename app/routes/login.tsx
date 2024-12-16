import type { Route } from "./+types/login";
import LoginPage from "~/login/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Personal Ledger - Login" },
    { name: "description", content: "Login page for Personal Ledger" },
  ];
}

export default function Login() {
  return <LoginPage />;
}
