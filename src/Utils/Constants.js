import * as Yup from "yup";

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
}

Object.freeze(CURRECIES);
Object.freeze(ACCOUNT_TYPES);
Object.freeze(ROLES);
Object.freeze(PATHS);
Object.freeze(VALIDATION_SCHEMA);
Object.freeze(VST);