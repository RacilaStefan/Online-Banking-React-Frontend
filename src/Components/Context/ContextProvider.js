import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Logger } from "../../Utils/Logger";
import { fetchUserData } from "../../Utils/UtilFunctions";
import { atom, useAtom } from "jotai";

export const contextAtom = atom({});

const log = new Logger("Context Provider");

export default function ContextProvider({ children }) {
    const [ context, setContext ] = useAtom(contextAtom);
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
            log.trace("Context set with value", _context);
        }

        fetchData();
    }, [location]);

    useEffect(() => {
        log.info("Mounted");
    }, []);

    return (
        <>
            {children}
        </>
    );
}