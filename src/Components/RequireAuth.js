import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { compareRoles } from "../Utils/UtilFunctions";
import { Navigate, useLocation } from "react-router-dom";
import { Logger } from "../Utils/Logger";
import { PATHS } from "../Utils/Constants";
import { contextAtom } from "./Context/ContextProvider";

const log = new Logger("Require Auth");

export default function RequireAuth({ children, roleRequired }) {
    const [ context ] = useAtom(contextAtom);
    const location = useLocation();

    let _children = useRef(null);
    useEffect(() => {
		if (!context.isLoggedIn || !compareRoles(context.user.role, roleRequired)) {
			log.info("Unauthorized");
			_children.current = <Navigate to={PATHS.LOGIN} replace/>;
			return
		}
		log.info("Authorized");
		_children.current = children;
    }, [location]);
	
	return _children.current;
  }