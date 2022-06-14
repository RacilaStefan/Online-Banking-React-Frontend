import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../api/axios";
import { VERIFY_URL } from "../Utils/Constants";
import { Logger } from "../Utils/Logger";

const log = new Logger("Verify User");


export default function VerifyUser() {
    const [query] = useSearchParams();
	const [ output, setOutput ] = useState("Waiting for verification");

    useEffect(() => {
		axios.post(VERIFY_URL, query.entries().next().value[0], { headers: { "Content-Type": "text/plain" }}
			).then((response) => {
				log.info(response.data);
				setOutput("Verification complete");
			}).catch((error) => {
				log.apiError(error);
				setOutput("Error");
			});
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

	log.trace("Query value", query.entries().next().value[0]);

  return (
    <div className="wrapper">
		<span className="large-text">{output}</span>
		{output !== "Error" 
		? <i className="material-icons blue-text" style={{fontSize: "8em" }}> task_alt </i>
		: <i className="material-icons blue-text" style={{fontSize: "8em" }}> error_outline </i>}
		
	</div>
  )
}
