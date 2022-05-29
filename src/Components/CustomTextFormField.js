import { ErrorMessage, Field} from "formik";

export default function CustomTextFormField({ name, text = null, type = "text" }) {
    return (
        <div className="input-field">
            {text ? <label htmlFor={name}>{text}</label> : <></>}
            <Field name={name} type={type}/>
            <ErrorMessage name={name}/>
        </div>
        );
}