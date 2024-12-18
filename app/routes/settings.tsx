import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Personal Ledger - Settings" },
        { name: "description", content: "Personal Ledger Application Settings" },
    ];
}

export default function SettingsRoute() {
    return (
        <>
            <div>Settings Route</div>
        </>
    );
}
