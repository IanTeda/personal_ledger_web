import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Personal Ledger - Profile" },
        { name: "description", content: "Personal Ledger profile page" },
    ];
}

export default function ProfileRoute() {
    return (
        <>
            <div>Profile Route</div>
        </>
    );
}
