import { ErrorMessage, Field} from "formik";

export default function CustomTextFormField({ name, text = "text", type }) {
    return (
        <div className="input-field">
            <label htmlFor={name}>{text}</label>
            <Field name={name} type={type}/>
            <ErrorMessage name={name}/>
        </div>
        );
}