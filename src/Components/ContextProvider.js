import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Logger } from "../Utils/Logger";
import { FetchUserData } from "../Utils/UtilFunctions";

const Context = createContext();

const log = new Logger("Context Provider");

export function ContextProvider({ children }) {
    const [context, setContext] = useState({});
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const data = await FetchUserData();
            log.trace("Fetched data", data);
            if (data === false) {
                setContext({ isLoggedIn: false });
            } else {
                setContext({ isLoggedIn: true, user: {...data}});
            }
        }

        fetchData();
    }, [location]);

    return (
        <Context.Provider value={{context, setContext}}>
            { children }
        </Context.Provider>
    );
}

export default Context;