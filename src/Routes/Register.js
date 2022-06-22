import { Form, Formik } from "formik";
import React, { useState, useRef } from "react"
import axios from "../api/axios"
import { USER_VALIDATION_SCHEMA, 
    ACCOUNT_VALIDATION_SCHEMA, 
    ADDRESS_VALIDATION_SCHEMA, 
    CI_VALIDATION_SCHEMA, 
    REGISTER_URL } from "../Utils/Constants";
import * as Yup from "yup";
import UserRegistrationForm from "../Components/RegistrationForms/UserRegistrationForm";
import AddressRegistrationForm from "../Components/RegistrationForms/AddressRegistrationForm";
import CIRegistrationForm from "../Components/RegistrationForms/CIRegistrationForm";
import AccountRegistrationForm from "../Components/RegistrationForms/AccountRegistrationForm";
import { Logger } from "../Utils/Logger";
import { Button, Step, StepLabel, Stepper } from "@mui/material";

const NUMBER_OF_FORMS = 3 // begins from 0

const steps = ["User Details", "Address Details", "Identity Card Details", "Bank Account Type Selection"];

const log = new Logger("Register Page");

const schemas = [
    USER_VALIDATION_SCHEMA, 
    ADDRESS_VALIDATION_SCHEMA, 
    CI_VALIDATION_SCHEMA, 
    ACCOUNT_VALIDATION_SCHEMA
];

const initialValues = {
    firstName: 'Popescu',
    lastName: 'Popescu',
    username: '_popescu',
    password: 'asdasdasdasd',
    passConfirm: 'asdasdasdasd',
    email: 'asd@asd.dfasd',
    telephoneNumber: '1231231231',

    country: 'Asd',
    region: 'Asd',
    city: 'Asd',
    street: 'asd',
    number: 'asd',
    staircase: 'asd',
    apartment: 'asd',

    cnp: 'asd',
    series: 'asas',
    cnp_number: 'asdasd',
    expirationDate: '09/06/2026',

    currency: 'RON',
    type: 'CURRENT_ACCOUNT',
};

export default function Register() {

    const [ state, setState ] = useState(0);
    const [ submitButtonString, setSubmitButtonString] = useState("Next");

    const validationSchema = useRef(Yup.object({ ...schemas[state] }))

    const handleBackButton = () => {
        let currentForm = state;
        currentForm = currentForm > 0 ? currentForm - 1 : 0;
        let btnString = currentForm === NUMBER_OF_FORMS ? "Sumbit" : "Next";

        validationSchema.current = Yup.object({ ...schemas[currentForm] })

        setState(currentForm);
        setSubmitButtonString(btnString);
    }

    const handleNextButton = () => {
        let currentForm = state;
        currentForm += 1;
        let btnString = currentForm === NUMBER_OF_FORMS ? "Sumbit" : "Next";
        
        validationSchema.current = Yup.object({ ...schemas[currentForm] })

        setState(currentForm);
        setSubmitButtonString(btnString);
    }

    const handleSubmit = (values) => {
        if (state < NUMBER_OF_FORMS) {
            handleNextButton();
            return
        }

        log.trace("Form data", values);

        axios.post(REGISTER_URL,
            {
                firstName: values.firstName,
                lastName: values.lastName,
                username: values.username,
                password: values.password,
                email: values.email,
                telephoneNumber: values.telephoneNumber,
                address: {
                    country: values.country,
                    region: values.region,
                    city: values.city,
                    street: values.street,
                    number: values.number,
                    staircase: values.staircase,
                    apartment: values.apartment,
                },
                ci: {
                    cnp: values.country,
                    series: values.series,
                    number: values.cnp_number,
                    expirationDate: values.expirationDate,
                },
                accounts: [
                    {
                        currency: values.currency,
                        type: values.type,
                    },
                ],
            }).then((response) => {
                log.trace("Response from register", response.data);
            }).catch((error) => {
                log.error(error);
            });
    }

    let currentForm;
    switch (state) {
        case 0: currentForm = <UserRegistrationForm/>; break;
        case 1: currentForm = <AddressRegistrationForm/>; break;
        case 2: currentForm = <CIRegistrationForm/>; break;
        case 3: currentForm = <AccountRegistrationForm/>; break;
        default: break;
    }
        
    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema.current}
            onSubmit = {handleSubmit}
        >
            <Form>
                {currentForm}
                <div className="container">
                    {state !== 0 ? <Button variant="outlined" className="first" onClick={handleBackButton}> Back </Button> : <></>}
                    <Button variant="outlined" type="submit" className="second">{submitButtonString}</Button>
                </div>
                <Stepper activeStep={state} alternativeLabel className="stepper">
                    {steps.map((label) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Form>
        </Formik>
    );
}
