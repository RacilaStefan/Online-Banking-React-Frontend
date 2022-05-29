import axios from "../api/axios";
import { AUTH_URL } from "./Constants";
import { Logger } from "./Logger";

const log = new Logger("Utility Functions script");

export async function FetchUserData() {
    let response;
    let data;
    
    try {
        response = await (await axios.get(AUTH_URL)).data;
        data = response;
        //log.trace("User data", data);

        response = await (await axios.get(data._links.address.href)).data;
        data.address = response;
        //log.trace("User data with address added", data);

        response = await (await axios.get(data._links.ci.href)).data;
        data.ci = response;
        //log.trace("User data with ci added", data);

        response = await (await axios.get(data._links.accounts.href)).data;
        data.accounts = { _accounts: response._embedded.accountDtoes, _links: response._links };
        //log.trace("User data with accounts added", data);
    } catch (error) {
        log.error(error);
        return false;
    }

    return data;
}