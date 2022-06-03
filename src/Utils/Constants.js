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

};

const reqStr = "Required";

const VALIDATION_SCHEMA_TEMPLATES = {
    REQUIRED_STRING: Yup.string().required(reqStr),
}

export const VST = VALIDATION_SCHEMA_TEMPLATES;

export const VALIDATION_SCHEMA = {
    firstName: VST.REQUIRED_STRING,
    lastName: VST.REQUIRED_STRING,
    email: VST.REQUIRED_STRING.email("Ckeck email format."),
    telephoneNumber: VST.REQUIRED_STRING.matches(/^[0-9]{10}$/, "Invalid telephone number."),
    username: VST.REQUIRED_STRING,
    password: VST.REQUIRED_STRING,
    passConfirm: VST.REQUIRED_STRING.oneOf([Yup.ref('password'), null], 'Passwords must match'),

    country: VST.REQUIRED_STRING,
    region: VST.REQUIRED_STRING,
    city: VST.REQUIRED_STRING,
    street: VST.REQUIRED_STRING,
    number: VST.REQUIRED_STRING,
    staircase: VST.REQUIRED_STRING,
    apartment: VST.REQUIRED_STRING,

    cnp: VST.REQUIRED_STRING,
    series: VST.REQUIRED_STRING,
    cnp_number: VST.REQUIRED_STRING,
    expirationDate: Yup.date("Invalid date format").required("Required"),

    currency: VST.REQUIRED_STRING,
    type: VST.REQUIRED_STRING, 
};

Object.freeze(CURRECIES);
Object.freeze(ACCOUNT_TYPES);
Object.freeze(ROLES);
Object.freeze(PATHS);
Object.freeze(VALIDATION_SCHEMA);
Object.freeze(VST);