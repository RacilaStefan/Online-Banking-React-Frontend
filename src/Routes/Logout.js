import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { contextAtom } from "../Components/Context/ContextProvider";
import { LOGOUT_URL, PATHS } from "../Utils/Constants";
import { Logger } from "../Utils/Logger";

const log = new Logger("Logout Page");

export default function Logout() {
    const [ context, setContext ] = useAtom(contextAtom);

    const [text, setText] = useState();
    useEffect(() => {
        if (context.isLoggedIn) {
            axios.get(LOGOUT_URL)
                .then((response) => {
                    setContext({ isLoggedIn: false });
                    log.info(response.data);
                }).catch((error) => {
                    log.apiError(error);
                });
            setText(<div> You were succefully logged out. </div>);
        } else {
            setText(<div> You don't have an account, make one<Link to={PATHS.REGISTER}>here</Link></div>);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="container">
            {text}
        </div>
    )
}