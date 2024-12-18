import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div>
            <div>
                <h1>This is the Auth Layout</h1>
            </div>
            {/* // Inject any nested routes into Layout. */}
            <Outlet />
        </div>
    );
}
