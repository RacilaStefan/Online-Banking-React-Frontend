import CustomSelectFormField from "../../Components/CustomSelectFormField";
import { CURRECIES, ACCOUNT_TYPES } from "../../Utils/Constants";

export default function AccountRegistrationForm() {
    return (
        <div className="container">
            <p className="red-text">What type of account do you want to have? (You will be able to open multiple accounts later)</p>
            <CustomSelectFormField _name = "currency" options={CURRECIES}/>
            <CustomSelectFormField _name = "type" options={ACCOUNT_TYPES}/>
        </div>
    );
}