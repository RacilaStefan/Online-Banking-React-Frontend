import * as Yup from "yup";
import { Logger } from "./Logger";

const log = new Logger("Constants");

log.info("Loaded");

export const REGISTER_URL = "/api/v2/users"
export const USER_BASE_URL = "/api/v2/users"
export const LOGIN_URL = "/auth/login";
export const LOGOUT_URL = "/auth/logout";
export const AUTH_URL = "/auth";
export const BASE_URL = "http://localhost:8080";
//export const BASE_URL = "http://26.193.78.172:8000";
export const VERIFY_URL = "/auth/enable";
export const PAY_URL = "/api/v2/transactions";

export const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const CURRECIES = [
    { key : "RON", value : "RON" },
    { key : "EUR", value : "EUR" },
    { key : "USD", value : "USD" },
    { key : "GBP", value : "GBP" },
];

export const ACCOUNT_TYPES = [
    { key: "CURRENT_ACCOUNT", value: "CURRENT_ACCOUNT" },
    { key: "SAVINGS_ACCOUNT", value: "SAVINGS_ACCOUNT" },
    { key: "RECURRING_DEPOSIT_ACCOUNT", value: "RECURRING_DEPOSIT_ACCOUNT" },
    { key: "FIXED_DEPOSIT_ACCOUNT", value: "FIXED_DEPOSIT_ACCOUNT" },
];

export const ROLES = {
    ROLE_USER: "ROLE_USER",
    ROLE_STAFF: "ROLE_STAFF",
    ROLE_ADMIN: "ROLE_ADMIN",
};

export const PATHS = {
    LOGIN: "/login",
    LOGOUT: "/logout",
    REGISTER: "/register",
    DASHBOARD: "/my/dashboard", //
    PROFILE: "/my/profile", //visualizarea si actualizarea datelor personale (username etc. si setari de securitate)
    PREFERENCES: "/my/preferences", //setari cont stocate in cookies
    HOME: "/",
    ADMINPAGE: "/admin",
    VERIFY_USER: "/verify",

};

const reqStr = "Required field.";

const VALIDATION_SCHEMA_TEMPLATES = {
    REQUIRED_STRING: Yup.string().required(reqStr),
    REQUIRED_NUMBER: Yup.number().required(reqStr),
    REQUIRED_DATE: Yup.date("Invalid date format.").required(reqStr),
    REQUIRED_EMAIL: Yup.string().required(reqStr).email("Check email format."),
    REQUIRED_PHONENUMBER: Yup.string().required(reqStr).matches(/^[0-9]{10}$/, "Invalid telephone number."),
    REQUIRED_NAME: Yup.string().required(reqStr).matches(/^[A-Z][a-zA-Z \-]{2,100}$/, "Invalid name."),
    REQUIRED_USERNAME: Yup.string().required(reqStr).matches(/^[A-Za-z0-9_]{8,100}$/, "Invalid username."),
    REQUIRED_PASSWORD: Yup.string().required(reqStr).matches(/^[A-Za-z0-9~!@#$%^&*()_=+{};:<>,.?'"\[\]\-/]{12,100}$/, "Invalid password."),
    REQUIRED_2FACODE: Yup.string().required(reqStr).matches(/^[0-9]{6}$/, "Invalid verification code."),
    REQUIRED_IBAN: Yup.string().required(reqStr).length(24, "Invalid IBAN."),
    REQUIRED_AMOUNT: Yup.number().required(reqStr).min(2, "The lowest sum you can transfer is 2 monetary units.").max(10000, "The max sum you can transfer is 10 thousand monetary units."),
    REQUIRED_CURRENCY: Yup.string().required(reqStr).matches(/^[A-Z]{3}$/, "Invalid currency."),
    REQUIRED_CNP: Yup.string().required(reqStr).matches(/^[0-9]{13}$/, "Invalid CNP"),
    REQUIRED_SERIES: Yup.string().required(reqStr).matches(/^[A-Z]{2}$/, "Invalid series"),
    REQUIRED_CINUMBER: Yup.string().required(reqStr).matches(/^[0-9]{6}$/, "Invalid CI number"),

}

export const VST = VALIDATION_SCHEMA_TEMPLATES;

export const VALIDATION_SCHEMA = {
    firstName: VST.REQUIRED_NAME,
    lastName: VST.REQUIRED_NAME,
    email: VST.REQUIRED_EMAIL,
    telephoneNumber: VST.REQUIRED_PHONENUMBER,
    username: VST.REQUIRED_USERNAME,
    password: VST.REQUIRED_PASSWORD,
    passConfirm: VST.REQUIRED_STRING.oneOf([Yup.ref('password'), null], 'Passwords must match.'),
    twoFACode: VST.REQUIRED_2FACODE,

    country: VST.REQUIRED_STRING,
    region: VST.REQUIRED_STRING,
    city: VST.REQUIRED_STRING,
    street: VST.REQUIRED_STRING,
    number: VST.REQUIRED_STRING,
    staircase: VST.REQUIRED_STRING,
    apartment: VST.REQUIRED_STRING,

    cnp: VST.REQUIRED_CNP,
    series: VST.REQUIRED_SERIES,
    cnp_number: VST.REQUIRED_CINUMBER,
    expirationDate: VST.REQUIRED_DATE,

    currency: VST.REQUIRED_CURRENCY,
    type: VST.REQUIRED_STRING,
    
    iban: VST.REQUIRED_IBAN,
    amount: VST.REQUIRED_AMOUNT,
};

export const USER_VALIDATION_SCHEMA = {
    firstName: VALIDATION_SCHEMA.firstName,
    lastName: VALIDATION_SCHEMA.lastName,
    email: VALIDATION_SCHEMA.email,
    telephoneNumber: VALIDATION_SCHEMA.telephoneNumber,
    username: VALIDATION_SCHEMA.username,
    password: VALIDATION_SCHEMA.password,
    passConfirm: VALIDATION_SCHEMA.passConfirm,
};

export const ADDRESS_VALIDATION_SCHEMA = {
    country: VALIDATION_SCHEMA.country,
    region: VALIDATION_SCHEMA.region,
    city: VALIDATION_SCHEMA.city,
    street: VALIDATION_SCHEMA.street,
    number: VALIDATION_SCHEMA.number,
    staircase: VALIDATION_SCHEMA.staircase,
    apartment: VALIDATION_SCHEMA.apartment,
};

export const CI_VALIDATION_SCHEMA = {
    cnp: VALIDATION_SCHEMA.cnp,
    series: VALIDATION_SCHEMA.series,
    cnp_number: VALIDATION_SCHEMA.cnp_number,
    expirationDate: VALIDATION_SCHEMA.expirationDate,
};

export const ACCOUNT_VALIDATION_SCHEMA = {
    currency: VALIDATION_SCHEMA.currency,
    type: VALIDATION_SCHEMA.type,
};

export const TRANSACTION_VALIDATION_SCHEMA = {
    toIBAN: VALIDATION_SCHEMA.iban,
    fromIBAN: VALIDATION_SCHEMA.iban,
    currency: VALIDATION_SCHEMA.currency,
    amount: VALIDATION_SCHEMA.amount,
}

Object.freeze(CURRECIES);
Object.freeze(ACCOUNT_TYPES);
Object.freeze(ROLES);
Object.freeze(PATHS);
Object.freeze(VALIDATION_SCHEMA);
Object.freeze(VST);
Object.freeze(USER_VALIDATION_SCHEMA);
Object.freeze(ADDRESS_VALIDATION_SCHEMA);
Object.freeze(CI_VALIDATION_SCHEMA);
Object.freeze(ACCOUNT_VALIDATION_SCHEMA);
Object.freeze(TRANSACTION_VALIDATION_SCHEMA);