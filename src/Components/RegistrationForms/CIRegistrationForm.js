import CustomTextFormField from "../../Components/FormComponents/CustomTextFormField";

export default function AddressRegistrationForm() {
    return (
        <div className="container form">
            <p className="modal-form-title">Identity Card</p>
            <CustomTextFormField name="cnp" text="CNP"/>
            <CustomTextFormField name="series" text="Series"/>
            <CustomTextFormField name="cnp_number" text="Number"/>
            <CustomTextFormField name="expirationDate" text="Expiration Date"/>
        </div>
    );
}