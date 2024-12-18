import type { Route } from "./+types/forgot_password";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Personal Ledger - Forgot Password" },
        { name: "description", content: "I forgot my Personal Ledger password" },
    ];
}

export default function ForgotPassword() {
    return (
        <>
            <h1>Forgot Password</h1>
        </>
    );
}
