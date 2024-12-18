import { Outlet } from "react-router";

export default function SettingsLayout() {

    return (
        <div>
            <div>
                <h1>This is the Settings Layout</h1>
            </div>
            {/* // Inject any nested routes into Layout. */}
            <Outlet />
        </div>
    )
}
