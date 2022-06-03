import { NavLink } from "react-router-dom";

export default function NavItem({ path, children }) {
    return (
        <li>
            <NavLink to={path}>
                {children}
            </NavLink>
        </li>
    );
}