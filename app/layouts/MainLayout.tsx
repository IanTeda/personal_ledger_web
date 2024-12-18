import { Outlet } from "react-router";

export default function MainLayout() {

    return (
        <div>
            <div>
                <h1>This is the Main Layout</h1>
            </div>
            {/* // Inject any nested routes into Layout. */}
            <Outlet />
        </div>
    )
}
