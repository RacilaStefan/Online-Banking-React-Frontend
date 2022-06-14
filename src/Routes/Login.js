import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "../api/axios";
import { LOGIN_URL, PATHS, VALIDATION_SCHEMA } from "../Utils/Constants";
import { fetchUserData } from "../Utils/UtilFunctions";
import { Navigate } from "react-router-dom";
import { Logger } from "../Utils/Logger";
import Button from "@mui/material/Button";
import CustomTextFormField from "../Components/FormComponents/CustomTextFormField";
import { useAtom } from "jotai";
import { contextAtom } from "../Components/Context/ContextProvider";
import { useRef, useState } from "react";

const log = new Logger("Login Page");

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

    const redirect = context.isLoggedIn ? <Navigate to={PATHS.DASHBOARD}/> : <></>;
    
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
                // async function fetchData() {
                //     const data = await fetchUserData();
                //     //log.trace("Fetched data", data);
                //     if (data === false) {
                //         setContext({ isLoggedIn: false });
                //     } else {
                //         setContext({ isLoggedIn: true, user: {...data}});
                //     }
                // }
    
                // fetchData();
                if (state === NUMBER_OF_FORMS)
                    setContext({ok: Date.now()});
                log.info(response.data);
            })
            .catch((error) => {
                log.error(error);
            });
    }

    return (
        <div className="container">
            {redirect} 
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema.current}
                onSubmit={(values) => handleSubmit(values)}
                >
                <Form>
                    { state === 0 ? 
                        <><CustomTextFormField name="username" text="Username"/>
                        <CustomTextFormField name="password" text="Password" type="password"/></>
                        :
                        <CustomTextFormField name="twoFACode" text="Verification Code"/>
                    }
                    <div className="container">
                        {state !== 0 ? <Button className="btn waves-effect waves-light" onClick={handleBackButton}> Back </Button> : <></>}
                        <Button type="submit"  className="btn waves-effect waves-light">{submitButtonString}</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}