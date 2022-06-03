import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "../api/axios";
import { LOGIN_URL, PATHS } from "../Utils/Constants";
import { fetchUserData } from "../Utils/UtilFunctions";
import { Navigate } from "react-router-dom";
import { Logger } from "../Utils/Logger";
import Button from "@mui/material/Button";
import CustomTextFormField from "../Components/FormComponents/CustomTextFormField";
import { useAtom } from "jotai";
import { contextAtom } from "../Components/Context/ContextProvider";

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
            async function fetchData() {
                const data = await fetchUserData();
                //log.trace("Fetched data", data);
                if (data === false) {
                    setContext({ isLoggedIn: false });
                } else {
                    setContext({ isLoggedIn: true, user: {...data}});
                }
            }

            fetchData();
            log.info(response.data);
        }).catch((error) => {
            log.error(error);
        });
}

const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
});

export default function Login() {
    const [ context, setContext ] = useAtom(contextAtom);
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
                    <CustomTextFormField name="username" text="Username"/>
                    <CustomTextFormField name="password" text="Password" type="password"/>
                    <Button variant="contained" type="submit">
                        Log in
                        <i className="material-icons right">send</i>
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}