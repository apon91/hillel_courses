import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul className="nav">
                <li key='home'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li key='popular'>
                    <NavLink to="/popular?language=All">Popular</NavLink>
                </li>
                <li key='battle'>
                    <NavLink to="/battle">Battle</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;