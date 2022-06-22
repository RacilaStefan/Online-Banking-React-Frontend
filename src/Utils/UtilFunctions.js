import axios from "../api/axios";
import { AUTH_URL, DAYS, ROLES } from "./Constants";
import { Logger } from "./Logger";

const log = new Logger("Utility Functions script");

log.info("Loaded");

export async function fetchUserData() {
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

        response = await (await axios.get(data._links.transactions.href)).data;
        if (response._embedded) {
            data.transactions = { _transactions: response._embedded.transactionDtoes, _links: response._links };
        } else {
            data.transactions = { _transactions: [], _links: response._links };
        }
    } catch (error) {
        log.apiError(error);
        return false;
    }

    return data;
}

export async function updateFields(values, context, setContext) {
    const keyFound = Object.keys(values);

    log.trace("Keys Found", keyFound);
    const user = {...context.user};
    let isUserKey = false;
    keyFound.forEach( key => {
        if (user[key] !== undefined) {
            user[key] = values[key];
            isUserKey = true;
        }
    });
    log.trace("Updated User", user);
    
    if (isUserKey) {
        axios.put(
            context.user._links.self.href,
            {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                telephoneNumber: user.telephoneNumber,
            }
        ).then((response) => {
            setContext({ok: Date.now()});
            log.info("User updated");
        }).catch((error) => {
            log.apiError(error);
        });

        return;
    }

    const address = {...context.user.address};

    keyFound.forEach( key => {
        if (address[key] !== undefined) {
            address[key] = values[key];
        }
    }); 

    log.trace("Updated Address", address);


    axios.put(
        context.user._links.self.href,
        {
            address: {
                id: address.id,
                country: address.country,
                region: address.region,
                city: address.city,
                street: address.street,
                number: address.number,
                staircase: address.staircase,
                apartment: address.apartment,
            }
        }
    ).then((response) => {
        setContext({ok: Date.now()});
        log.info("Address updated");
    }).catch((error) => {
        log.apiError(error);
    });
}


export function compareRoles(role1, role2) {
    if (role2 === undefined) 
        role2 = ROLES.ROLE_USER;
    return getRoleComparableValue(role1) >= getRoleComparableValue(role2);
}

export function deleteBankAccount(accountId, context, setContext) {
    let accountLink;
    context.user.accounts._accounts.forEach(account => {
        if (account.id === accountId) {
            accountLink = account._links.self.href;
        }
    });

    axios.delete(accountLink)
        .then((response) => {
            log.info(response.data);
            setContext({ok: Date.now()});
        })
        .catch((error) => {
            log.apiError(error);
        });
}

export function createBankAccount(values, context, setContext) {
    log.trace("New Account Values", values);
    axios.post(
        context.user.accounts._links.self.href,
        {
            currency: values.currency,
            type: values.type,
        })
        .then((response) => {
            log.info(response.data);
            setContext({ok: Date.now()});
        })
        .catch((error) => {
            log.apiError(error);
        })
}

export function getFormattedDateString(date) {
    let dateObj = new Date(date);
    log.trace("zi", dateObj.getDate());
    log.trace("luna", dateObj.getMonth() + 1);
    log.trace("an", dateObj.getFullYear());
    log.trace("ora", dateObj.toLocaleTimeString('en-US', { hour12: false }));
    return `${DAYS[dateObj.getDay()]}, ${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()} ${dateObj.toLocaleTimeString('en-US', { hour12: false })}`;
}

function getRoleComparableValue(role) {
    switch (role) {
        case ROLES.ROLE_USER: return 1; 
        case ROLES.ROLE_STAFF: return 2; 
        case ROLES.ROLE_ADMIN: return 3; 
        default: return 0;
    }
}