import { Logger } from "../../Utils/Logger";
import { useEffect } from "react";

const log = new Logger("Footer Component");

export default function Footer() {

    useEffect(() => {
        //log.info("Mounted");
    }, []);

    return (
        <footer className="page-footer">
            <div className="container">
                <p> Acesta este un footer </p>
            </div>
        </footer>
    );
}