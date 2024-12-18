import {
    type RouteConfig,
    index,
    layout,
    prefix,
    route,
} from "@react-router/dev/routes";

export default [
    // Authentication
    layout("./layouts/AuthLayout.tsx", [
        route("login", "routes/login.tsx"),
        route("logout", "routes/logout.tsx"),
        route("reset-password", "routes/reset_password.tsx"),
    ]),

    // Wrap everything in the Main Layout
    layout("layouts/MainLayout.tsx", [
        // App landing (index)
        index("routes/dashboard.tsx"),

        // App settings
        route("settings", "./layouts/SettingsLayout.tsx", [
            // App settings landing (index)
            index("./routes/settings.tsx"),

            // Application users. TODO: This needs to be admin protected
            route("users", "./routes/settings_users.tsx"),

            // Application user sessions (tokens). TODO: This needs to be admin protected
            route("sessions", "./routes/settings_sessions.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
