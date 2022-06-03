import { NavLink } from "react-router-dom";
import "../../resources/css/header.css";
import { contextAtom } from "../Context/ContextProvider";
import { useEffect } from "react";
import { PATHS, ROLES } from "../../Utils/Constants";
import NavItem from "./NavItem";
import { Logger } from "../../Utils/Logger";
import { useAtom } from "jotai";

const log = new Logger("Header Component");

export default function Header() {
    const [ context ] = useAtom(contextAtom);

    const userNav = [];

    log.trace("context", context);
    if (context.isLoggedIn !== undefined && context.isLoggedIn) {
        userNav.push(<NavItem key={PATHS.DASHBOARD} path={PATHS.DASHBOARD}>Dashboard</NavItem>);
        userNav.push(<NavItem key={PATHS.PROFILE} path={PATHS.PROFILE}>Profile</NavItem>);
        userNav.push(<NavItem key={PATHS.LOGOUT} path={PATHS.LOGOUT}>Logout</NavItem>);

        switch (context.user.role) {
            case ROLES.ROLE_ADMIN: 
                userNav.push( <NavItem key={PATHS.ADMINPAGE} path={PATHS.ADMINPAGE}>Admin Page</NavItem>); 
                break;
            default: break;
        }
    } else {
        userNav.push(<NavItem key={PATHS.LOGIN} path={PATHS.LOGIN}>Login</NavItem>);
        userNav.push(<NavItem key={PATHS.REGISTER} path={PATHS.REGISTER}>Register</NavItem>);
    }

    useEffect(() => {
        //log.info("Mounted");
    }, []);

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