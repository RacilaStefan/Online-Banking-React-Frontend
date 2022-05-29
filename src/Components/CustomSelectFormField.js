import { ErrorMessage, Field} from "formik";

export default function CustomSelectFormField({ _name, options }) {

    return (
        <div className="input-field">
            <Field as="select" name={_name}>
                {options.map(option => {
                    return (
                            <option key={option.key} value={option.value}>{option.key}</option>
                        );
                    }
                )}
            </Field>
            <ErrorMessage name={_name}/>
        </div>
    );
}
