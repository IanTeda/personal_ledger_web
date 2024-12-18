import type { Route } from "./+types/settings_sessions";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Personal Ledger | Settings - Sessions" },
        { name: "description", content: "Personal Ledger application user sessions" },
    ];
}

export default function SettingsSessionsRoute() {
    return (
        <>
            <div>Settings Sessions Route</div>
        </>
    );
}
