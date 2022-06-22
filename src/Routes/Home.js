import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { USER_BASE_URL } from "../Utils/Constants";
import { Logger } from "../Utils/Logger";

const log = new Logger("Home Page");

export default function Home() {

    const [baconipsum, setBaconIpsum] = useState([]);

    useEffect(() => {
        axios.get("https://baconipsum.com/api/?type=all-meat&paras=2", { withCredentials: false })
            .then((response) => {
                const text = response.data;
                setBaconIpsum(text);
            }).catch((error) => {
                log.apiError(error);
            });
    }, []);

    useEffect(() => {
        log.info("Mounted");
    }, []);

    log.info("Rendered");
    return (
        <div className="container">
            <h4>Home</h4>
            <p>{baconipsum}</p>
        </div>
    );
}