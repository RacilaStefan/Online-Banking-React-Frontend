import { useState } from "react";
import ProfileItem from "../Components/ProfileItem";
import { Logger } from "../Utils/Logger";
import Button from "@mui/material/Button";
import RequireAuth from "../Components/RequireAuth";
import UserModalForm from "../Components/ModalUpdateForms/UserModalForm";
import AddressModalForm from "../Components/ModalUpdateForms/AddressModalForm";
import AccountModalForm from "../Components/ModalUpdateForms/AccountModalForm";
import AccountContainer from "../Components/AccountContainer";
import { deleteBankAccount } from "../Utils/UtilFunctions";
import { useAtom } from "jotai";
import { contextAtom } from "../Components/Context/ContextProvider";

var log = new Logger("Profile Page");

function ProfileComponent() {
    const [ context, setContext ] = useAtom(contextAtom);
    
    const [ openEditUser, setOpenEditUser ] = useState(false);
    const [ openEditAddress, setOpenEditAddress ] = useState(false);
    const [ openAddAccount, setOpenAddAccount ] = useState(false);

    const handleAccountDelete = (id) => {
        deleteBankAccount(id, context, setContext);
    }

    let accounts;
    if (context.isLoggedIn) {
        const showDeleteButton = context.user.accounts._accounts.length > 1;
        accounts = context.user.accounts._accounts.map((account) => {
            return (
                <AccountContainer key={account.id} account={account} handleAccountDelete={handleAccountDelete} showDeleteButton={showDeleteButton}/>
            );
        });
    }
    
    log.trace("Accounts", accounts); 
    if (accounts === undefined) return <></>;  
    return (
        <div className="container">
            <h4>My Profile</h4>
            <div className="card-panel">
                <ProfileItem label= "First Name" value= { context.user.firstName } name="firstName" />
                <ProfileItem label= "Last Name" value= { context.user.lastName } name="lastName" />
                <ProfileItem label= "Username" value= { context.user.username } name="username" />
                <ProfileItem label= "Email" value= { context.user.email } isEditable={ false } />
                <ProfileItem label= "Telephone Number" value= { context.user.telephoneNumber } name="telephoneNumber" />
                <div>
                    <Button variant="outlined" onClick={() => setOpenEditUser(true)}>Edit User</Button>
                    <UserModalForm open={openEditUser} close={() => setOpenEditUser(false)}/>
                </div>            
            </div>
            <div className="card-panel">
                <ProfileItem label= "Country" value= { context.user.address.country } name="country" />
                <ProfileItem label= "Region" value= { context.user.address.region } name="region" />
                <ProfileItem label= "City" value= { context.user.address.city } name="city" />
                <ProfileItem label= "Street" value= { context.user.address.street } name="street" />
                <ProfileItem label= "Number" value= { context.user.address.number } name="number" />
                <ProfileItem label= "Staircase" value= { context.user.address.staircase } name="staircase" />
                <ProfileItem label= "Apartment" value= { context.user.address.apartment } name="apartment" />
                <div>
                    <Button variant="outlined" onClick={() => setOpenEditAddress(true)}>Edit Address</Button>
                    <AddressModalForm open={openEditAddress} close={() => setOpenEditAddress(false)}/>
                </div>
            </div>
            <div className="card-panel">
                <ProfileItem label= "CNP" value= { context.user.ci.cnp } isEditable={ false } />
                <ProfileItem label= "Series" value= { context.user.ci.series } isEditable={ false } />
                <ProfileItem label= "Number" value= { context.user.ci.number } isEditable={ false } />
                <ProfileItem label= "Expires in" value= { context.user.ci.expirationDate } isEditable={ false } />
            </div>
            <div className="card-panel">
                { accounts }
                <div>
                    <Button variant="outlined" onClick={() => setOpenAddAccount(true)}>Add Account</Button>
                    <AccountModalForm open={openAddAccount} close={() => setOpenAddAccount(false)}/>
                </div>
            </div>
        </div>
    );
}

export default function Profile() {
    return (
        <RequireAuth>
            <ProfileComponent/>
        </RequireAuth>
    );
}