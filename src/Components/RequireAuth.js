import { useEffect, useRef, useState } from "react";
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

    const [isAuthorized, setAuthorized] = useState(false);
    const isLoaded = useRef(false);
	const [redirect, setRedirect] = useState(<></>);
    useEffect(() => {
		if (!context.isLoggedIn || !compareRoles(context.user.role, roleRequired)) {
			log.info("Unauthorized");
			setAuthorized(false);
		} else {
			log.info("Authorized");
			setAuthorized(true);
		}
		isLoaded.current = true;
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (!isAuthorized)
			setRedirect(<Navigate to={PATHS.LOGIN}/>);
		else 
			setRedirect(<></>);
	}, [isAuthorized]);

	useEffect(() => {
        log.info("Mounted");
    }, []);

    log.info("Rendered");

	return isAuthorized ? <>{children}</> : <>{redirect}</>;
}