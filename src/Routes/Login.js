import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "../api/axios";
import { LOGIN_URL, PATHS, VALIDATION_SCHEMA } from "../Utils/Constants";
import { Navigate } from "react-router-dom";
import { Logger } from "../Utils/Logger";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import CustomTextFormField from "../Components/FormComponents/CustomTextFormField";
import { useAtom } from "jotai";
import { contextAtom } from "../Components/Context/ContextProvider";
import { useRef, useState } from "react";
import { useEffect } from "react";

const log = new Logger("Login Page");

const steps = ["Enter credentials", "Check email for 2FA code"];

const NUMBER_OF_FORMS = 1;

const initialValues = {
    username: 'stefan_admin',
    password: 'qwertyuiop1234',
    twoFACode: '',
}

export default function Login() {
    const [ context, setContext ] = useAtom(contextAtom);
    const [ state, setState ] = useState(0);
    const [ submitButtonString, setSubmitButtonString] = useState("Next");

    const validationSchema = useRef(Yup.object({
        username: VALIDATION_SCHEMA.username,
        password: VALIDATION_SCHEMA.password,
    }))

    const [ redirect, setRedirect ] = useState(<></>);
    
    useEffect(() => {
        if (context.isLoggedIn)
            setRedirect(<Navigate to={PATHS.DASHBOARD}/>);
        else
            setRedirect(<></>);
    }, []);
    
    const handleBackButton = () => {
        let currentForm = state;
        currentForm = currentForm > 0 ? currentForm - 1 : 0;
        let btnString = currentForm === 1 ? "Log in" : "Next";

        validationSchema.current = Yup.object({
            username: VALIDATION_SCHEMA.username,
            password: VALIDATION_SCHEMA.password,
        });

        setState(currentForm);
        setSubmitButtonString(btnString);
    }

    const handleNextButton = () => {
        
        let currentForm = state;
        currentForm += 1;
        let btnString = currentForm === 1 ? "Log in" : "Next";

        validationSchema.current = Yup.object({
            username: VALIDATION_SCHEMA.username,
            password: VALIDATION_SCHEMA.password,
            twoFACode: VALIDATION_SCHEMA.twoFACode,
        });
        
        setState(currentForm);
        setSubmitButtonString(btnString);
    }

    const handleSubmit = (values) => {
        if (state < NUMBER_OF_FORMS) {
            handleNextButton();
        }

        axios.post(
            LOGIN_URL,
            {   
                username: values.username,
                password: values.password,
                twoFACode: values.twoFACode,
            })
            .then((response) => {
                if (state === NUMBER_OF_FORMS)
                    setContext({ok: Date.now()});
                log.info(response.data);
            })
            .catch((error) => {
                log.error(error);
            });
    }

    return (
        <>
            {redirect} 
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema.current}
                onSubmit={(values) => handleSubmit(values)}
                >
                <Form>
                    <div className="container form">
                        { state === 0 ? 
                            <>
                            <p className="modal-form-title">Credentials</p>
                            <CustomTextFormField name="username" text="Username"/>
                            <CustomTextFormField name="password" text="Password" type="password"/></>
                            :
                            <><p className="modal-form-title">2FA Code</p>
                            <CustomTextFormField name="twoFACode" text="Verification Code"/></>
                        }
                    </div>
                    <div className="container">
                        {state !== 0 ? <Button variant="outlined" className="first" onClick={handleBackButton}> Back </Button> : <></>}
                        <Button type="submit" variant="outlined" className="second">{submitButtonString}</Button>
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
        </>
    );
}