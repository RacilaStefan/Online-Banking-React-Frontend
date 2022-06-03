import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { contextAtom } from "../Components/Context/ContextProvider";
import { LOGOUT_URL, PATHS } from "../Utils/Constants";
import { Logger } from "../Utils/Logger";

const log = new Logger("Logout Page");

export default function Logout() {
    const [ context, setContext ] = useAtom(contextAtom);
    log.trace("Context", context);

    const text = useRef();
    useEffect(() => {
        if (context.isLoggedIn) {
            axios.get(LOGOUT_URL)
                .then((response) => {
                    setContext({ isLoggedIn: false });
                    log.info(response.data);
                }).catch((error) => {
                    log.error(error);
                });
            text.current = <div> You were succefully logged out. </div>;
        } else {
            text.current = <div> You don't have an account, make one<Link to={PATHS.REGISTER}>here</Link></div>;
        }
    });
    
    return (
        <div className="container">
            {text.current}
        </div>
    )
}