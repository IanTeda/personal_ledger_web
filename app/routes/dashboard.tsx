import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function DashboardRoute() {
    return (
        <>
            <div>Dashboard Route</div>
        </>
    );
}