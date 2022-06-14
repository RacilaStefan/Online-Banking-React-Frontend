import { ErrorMessage, Field} from "formik";

export default function CustomSelectFormField({ name, options, text = null }) {

    return (
        <div className="input-field">
            {text ? <label className="active" htmlFor={name}>{text}</label> : <></>}
            <Field as="select" name={name}>
                {options.map(option => {
                    return (
                            <option key={option.key} value={option.value}>{option.key}</option>
                        );
                    }
                )}
            </Field>
            <ErrorMessage name={name}/>
        </div>
    );
}
