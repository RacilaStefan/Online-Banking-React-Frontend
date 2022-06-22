import CustomSelectFormField from "../../Components/FormComponents/CustomSelectFormField";
import { CURRECIES, ACCOUNT_TYPES } from "../../Utils/Constants";

export default function AccountRegistrationForm() {
    return (
        <div className="container form">
            <p className="modal-form-title">Bank Account Details</p>
            <CustomSelectFormField name = "currency" options={CURRECIES}/>
            <CustomSelectFormField name = "type" options={ACCOUNT_TYPES}/>
        </div>
    );
}