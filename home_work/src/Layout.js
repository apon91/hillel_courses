import {Outlet} from "react-router-dom";
import Navigation from "./Novigation";

function Layout() {
    return (
        <main className="container">
            <Navigation/>
            <Outlet/>
        </main>
    );
}

export default Layout;