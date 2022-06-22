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
                <div className="row">
                    <div className="col l4 s12">
                        <h5 className="white-text">Contact</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/stefan-racila-a53522207/" target="_blank">LinkedIn</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/RacilaStefan?tab=repositories" target="_blank">Github</a></li>
                        </ul>
                    </div>
                </div>  
            </div>
        </footer>
    );
}