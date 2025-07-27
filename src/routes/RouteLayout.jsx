import Header from "../components/Scaffolding/Header";
import { Outlet } from "react-router-dom";
function RouteLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default RouteLayout;