import type { Route } from "./+types/login";
import LoginPage from "~/pages/LoginPage";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Personal Ledger - Login" },
        { name: "description", content: "Login page for Personal Ledger" },
    ];
}

export default function Login() {
    return (
        <>
            <h1>Reset Password</h1>
        </>
    );
}
