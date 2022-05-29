import CustomTextFormField from "../../Components/CustomTextFormField";

export default function AddressRegistrationForm() {
    return (
        <div className="container">
            <p className="red-text">Identity Card</p>
            <CustomTextFormField name="cnp" text="CNP"/>
            <CustomTextFormField name="series" text="Series"/>
            <CustomTextFormField name="number" text="Number"/>
            <CustomTextFormField name="expirationDate" text="Expiration Date"/>
        </div>
    );
}