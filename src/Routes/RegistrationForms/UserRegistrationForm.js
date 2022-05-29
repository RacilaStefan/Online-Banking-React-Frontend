import CustomTextFormField from "../../Components/CustomTextFormField";

export default function UserRegistrationForm() {
    return (
        <div className="container">
            <p className="red-text">User Details</p>
            <CustomTextFormField name="firstName" text="First Name"/>
            <CustomTextFormField name="lastName" text="Last Name"/>
            <CustomTextFormField name="email" text="Email"/>
            <CustomTextFormField name="telephoneNumber" text="Telephone"/>
            <CustomTextFormField name="username" text="Username"/>
            <CustomTextFormField name="password" text="Password" type="password"/>
            <CustomTextFormField name="passConfirm" text="Confirm Password" type="password"/>
        </div>
    );
}