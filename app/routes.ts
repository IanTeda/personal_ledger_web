import {
    type RouteConfig,
    index,
    layout,
    route,
} from "@react-router/dev/routes";

export default [

    // Authentication
    layout("./layouts/AuthLayout.tsx", [
        route("login", "routes/login.tsx"),
        route("logout", "routes/logout.tsx"),
        route("reset-password", "routes/reset_password.tsx"),
    ]),

    // App landing (index)
    layout("layouts/MainLayout.tsx", [index("routes/home.tsx")]),
] satisfies RouteConfig;
