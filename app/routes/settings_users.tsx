import type { Route } from "./+types/settings_users";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Personal Ledger | Settings - Users" },
        { name: "description", content: "Personal Ledger application users settings" },
    ];
}

export default function SettingsUsersRoute() {
    return (
        <>
            <div>Settings Users Route</div>
        </>
    );
}
