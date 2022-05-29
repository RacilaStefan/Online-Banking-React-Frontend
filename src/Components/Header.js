import { NavLink } from "react-router-dom";
import "../resources/css/header.css";
import Context from "./ContextProvider";
import { useContext } from "react";
import { PATHS, ROLES } from "../Utils/Constants";
import NavItem from "./NavItem";
import { Logger } from "../Utils/Logger";

const log = new Logger("Header Component");

export default function Header() {
    const { context } = useContext(Context);

    const userNav = [];
    if (context.isLoggedIn) {
        userNav.push(<NavItem key={PATHS.DASHBOARD} path={PATHS.DASHBOARD}>Dashboard</NavItem>);
        userNav.push(<NavItem key={PATHS.PROFILE} path={PATHS.PROFILE}>Profile</NavItem>);
        userNav.push(<NavItem key={PATHS.LOGOUT} path={PATHS.LOGOUT}>Logout</NavItem>);

        log.trace("Context", context);
        try {
            switch (context.user.role) {
                case ROLES.ROLE_ADMIN: 
                    userNav.push( <NavItem key={PATHS.ADMINPAGE} path={PATHS.ADMINPAGE}>Admin Page</NavItem>); 
                    break;
                default: break;
            }
        } catch(error) { }
    } else {
        userNav.push(<NavItem key={PATHS.LOGIN} path={PATHS.LOGIN}>Login</NavItem>);
        userNav.push(<NavItem key={PATHS.REGISTER} path={PATHS.REGISTER}>Register</NavItem>);
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to={PATHS.HOME} className="brand-logo">Logo</NavLink>
                <ul className="right">
                    {userNav}
                </ul>
            </div>
        </nav>
    );
}