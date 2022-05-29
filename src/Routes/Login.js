import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import axios from "../api/axios";
import Context from "../Components/ContextProvider";
import { LOGIN_URL, PATHS } from "../Utils/Constants";
import { Navigate } from "react-router-dom";
import { Logger } from "../Utils/Logger";
import Button from "@mui/material/Button";

const log = new Logger("Login Page");

const initialValues = {
    username: 'stefan_admin',
    password: 'qwertyuiop1234',
}

async function handleSubmit(values, setContext) {
    await axios.post(
        LOGIN_URL,
        {   
            username: values.username,
            password: values.password,
        },
        {
            header: {'Content-Type' : 'aplication/json'},
        }).then((response) => {
            setContext({ isLoggedIn: true });
            log.info("User logged in");
        }).catch((error) => {
            log.error(error);
        });
}

const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
});

export default function Login() {
    const { context, setContext } = useContext(Context);
    const redirect = context.isLoggedIn ? <Navigate to={PATHS.DASHBOARD}/> : <></>;
    
    return (
        <div className="container">
            {redirect}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values, setContext)}
                >
                <Form>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <Field name="username" type="text" className="validate" autoComplete="off"/>
                        <ErrorMessage name="username" className="red-text"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password"/>
                        <ErrorMessage name="password"/>
                    </div>
                    <Button variant="contained" type="submit">
                        Log in
                        <i className="material-icons right">send</i>
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}