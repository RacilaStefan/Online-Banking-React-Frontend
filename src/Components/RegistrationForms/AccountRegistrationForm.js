import CustomSelectFormField from "../../Components/FormComponents/CustomSelectFormField";
import { CURRECIES, ACCOUNT_TYPES } from "../../Utils/Constants";

export default function AccountRegistrationForm() {
    return (
        <div className="container">
            <p className="red-text">What type of account do you want to have? (You will be able to open multiple accounts later)</p>
            <CustomSelectFormField name = "currency" options={CURRECIES}/>
            <CustomSelectFormField name = "type" options={ACCOUNT_TYPES}/>
        </div>
    );
}