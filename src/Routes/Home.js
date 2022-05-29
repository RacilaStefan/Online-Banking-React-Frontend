import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { USER_BASE_URL } from "../Utils/Constants";
import { Logger } from "../Utils/Logger";

const log = new Logger("Home Page");

export default function Home() {

    const [baconipsum, setBaconIpsum] = useState([]);
    const [users, setUsers] = useState({});

    useEffect(() => {
        axios.get("https://baconipsum.com/api/?type=all-meat&paras=2", { withCredentials: false })
            .then((response) => {
                const text = response.data;
                log.info("Text from bacon ipsum fetched.");
                setBaconIpsum(text);
            }).catch((error) => {
                log.error(error);
            });
        
        axios.get(USER_BASE_URL)
            .then((reponse) => {
                const users = reponse.data;
                log.trace("Users array", users);
                setUsers({...users});
            }).catch(function(error) {
                log.error(error);
            });
    
    }, []);

    return (
        <div className="container">
            <h1>Home</h1>
            <p>{baconipsum}</p>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    );
}