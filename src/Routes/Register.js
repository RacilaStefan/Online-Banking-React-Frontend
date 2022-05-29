import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react"
import axios from "../api/axios"
import { REGISTER_URL, VST } from "../Utils/Constants";

import UserRegistrationForm from "./RegistrationForms/UserRegistrationForm";
import AddressRegistrationForm from "./RegistrationForms/AddressRegistrationForm";
import CIRegistrationForm from "./RegistrationForms/CIRegistrationForm";
import AccountRegistrationForm from "./RegistrationForms/AccountRegistrationForm";
import { Logger } from "../Utils/Logger";

const NUMBER_OF_FORMS = 3

const requiredString = "Required";

const log = new Logger("Register Page");

const validationSchema = Yup.object({
    
    // #### TODO contants with schemas #### //

    firstName: VST.REQUIRED_STRING,
    lastName: Yup.string().required(requiredString),
    email: Yup.string().required(requiredString).email("Ckeck email format."),
    telephoneNumber: Yup.string().required(requiredString).matches("[0-9]{10}", "Invalid telephone number."),
    username: Yup.string().required(requiredString),
    password: Yup.string().required(requiredString),
    passConfirm: Yup.string().required(requiredString).oneOf([Yup.ref('password'), null], 'Passwords must match'),

    country: Yup.string().required(requiredString),
    region: Yup.string().required(requiredString),
    city: Yup.string().required(requiredString),
    street: Yup.string().required(requiredString),
    number: Yup.string().required(requiredString),
    staircase: Yup.string().required(requiredString),
    apartment: Yup.string().required(requiredString),

    cnp: Yup.string().required(requiredString),
    series: Yup.string().required(requiredString),
    cnp_number: Yup.string().required(requiredString),
    expirationDate: Yup.date("Invalid date format").required(requiredString),

    currency: Yup.string().required(requiredString),
    type: Yup.string().required(requiredString),
});

log.trace("Validation Schema", validationSchema);

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

export default class Register extends React.Component {

    state = {
        currentForm: 0,
        submitButtonString: "Next",
    };

    handleBackButton = () => {
        let currentForm = this.state.currentForm;
        currentForm = currentForm > 0 ? currentForm - 1 : 0;
        let btnString = currentForm === NUMBER_OF_FORMS ? "Sumbit" : "Next";
        this.setState({
            currentForm: currentForm,
            submitButtonString: btnString,
        });
    }

    handleNextButton = () => {
        let currentForm = this.state.currentForm;
        currentForm += 1;
        let btnString = currentForm === NUMBER_OF_FORMS ? "Sumbit" : "Next";
        this.setState({
            currentForm: currentForm,
            submitButtonString: btnString,
        });
    }

    handleSubmit = (values) => {
        if (this.state.currentForm < NUMBER_OF_FORMS) {
            this.handleNextButton();
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
            },
            {
                header: {'Content-Type' : 'aplication/json'},
            }).then((response) => {
                log.trace("Response from register", response.data);
            }).catch((error) => {
                log.error(error);
            });
    }

    render() {
        let currentForm;
        switch (this.state.currentForm) {
            case 0: currentForm = <UserRegistrationForm/>; break;
            case 1: currentForm = <AddressRegistrationForm/>; break;
            case 2: currentForm = <CIRegistrationForm/>; break;
            case 3: currentForm = <AccountRegistrationForm/>; break;
            default: break;
        }

        log.trace("Current Form", this.state.currentForm);

        return (
            <Formik
                initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {this.handleSubmit}
            >
                <Form>
                    {currentForm}
                    <div className="container">
                        <button type="button" className="btn waves-effect waves-light" onClick={this.handleBackButton}> Back </button>
                        <input type="submit" className="btn waves-effect waves-light" value={this.state.submitButtonString}/>
                    </div>
                </Form>
            </Formik>
        );
    }
}