import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Logger } from "../../Utils/Logger";
import { fetchUserData } from "../../Utils/UtilFunctions";
import { atom, useAtom } from "jotai";

export const contextAtom = atom({});
export const updateAtom = atom({date: Date.now()});

const log = new Logger("Context Provider");

export default function ContextProvider({ children }) {
    const [context, setContext] = useAtom(contextAtom);
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const data = await fetchUserData();
            let _context;
            if (data === false) {
                _context = { isLoggedIn: false }
                setContext(_context);
            } else {
                _context = { isLoggedIn: true, user: {...data}}
                setContext(_context);
            }
            //setLoaded(true);
            log.trace("Context set with value", _context);
        }

        fetchData();
    }, [location, context.ok]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        log.info("Mounted");
    }, []);

    useEffect(() => {
        log.info("Updated");
    }, [context.ok]);

    log.info("Rendered");
    // log.trace("Context on every render", context);
    // log.trace("Am a going to render this time?", context !== null && context.ok === undefined && Object.keys(context).length !== 0)
    return context !== null && context.ok === undefined && Object.keys(context).length !== 0 ? <> {children} </> : <></>;
}