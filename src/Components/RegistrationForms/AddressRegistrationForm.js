import CustomTextFormField from "../../Components/FormComponents/CustomTextFormField";

export default function AddressRegistrationForm() {
    return (
        <div className="container form">
            <p className="modal-form-title">Address</p>
            <CustomTextFormField name="country" text="Country"/>
            <CustomTextFormField name="region" text="Region"/>
            <CustomTextFormField name="city" text="City"/>
            <CustomTextFormField name="street" text="Street"/>
            <CustomTextFormField name="number" text="Number"/>
            <CustomTextFormField name="staircase" text="Staircase"/>
            <CustomTextFormField name="apartment" text="Apartment"/>
        </div>
    );
}