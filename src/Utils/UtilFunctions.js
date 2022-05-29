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

export async function UpdateField(value, context, setContext) {
    const keyFound = Object.keys(value)[0];

    log.trace("Key Found", keyFound);
    
    if (context.user[keyFound] !== undefined) {
        const user = {};
        Object.keys(context.user).forEach(key => {
            if (key === keyFound) {
                user[key] = value[key];
            } else {
                user[key] = context.user[key];
            }
        });

        log.trace("Updated User", user);
        
        axios.put(
                context.user._links.self.href,
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    telephoneNumber: user.telephoneNumber,
                }
            ).then((response) => {
                setContext({user: user})
                log.info(response.data);
            }).catch((error) => {
                log.error(error);
            });
        
        return;
    }

    if (context.user.address[keyFound] !== undefined) {
        const address = {};
        Object.keys(context.user.address).forEach(key => {
            if (key === keyFound) {
                address[key] = value[key];
            } else {
                address[key] = context.user.address[key];
            }
        }); 
        log.trace("Updated Address", address);
        return;
    }
}