import { useContext, useState, useRef } from "react";
import Context from "../Components/ContextProvider";
import ProfileItem from "../Components/ProfileItem";
import { Logger } from "../Utils/Logger";

var log = new Logger("Profile Page");

export default function Profile() {
    const { context } = useContext(Context);
    const count = useRef(0);

    const getCount = () => {
        count.current += 1;
        return count.current;
    }

    log.trace("Context", context);

    if (!context.isLoggedIn) return <></>;
    
    const accounts = context.user.accounts._accounts.map((account, index) => {
        return (
            <div className="card-panel" key={ index }>
                <p> { `Account ${index}` } </p>
                <ProfileItem label= "IBAN" value={ account.iban } isEditable={ false }/>
                <ProfileItem label= "Card Number" value={ account.cardNumber } isEditable={ false } />
                <ProfileItem label= "Currency" value={ account.currency } isEditable={ false } />
                <ProfileItem label= "Type" value={ account.type } isEditable={ false } />
                <ProfileItem label= "CVV" value={ account.cvv } isEditable={ false } />
                <ProfileItem label= "Balance" value={ account.balance } isEditable={ false } />
                <ProfileItem label= "Expires in" value={ account.expirationDate } isEditable={ false } />
                <button>Delete Account</button>
            </div>
        );
    })
    return (
        <div className="container">
            <div className="card-panel">
                <ProfileItem label= "First Name" value= { context.user.firstName } getCount={ getCount } />
                <ProfileItem label= "Last Name" value= { context.user.lastName } getCount={ getCount } />
                <ProfileItem label= "Username" value= { context.user.username } getCount={ getCount } />
                <ProfileItem label= "Email" value= { context.user.email } isEditable={ false } />
                <ProfileItem label= "Telephone Number" value= { context.user.telephoneNumber } />
                <button>Edit User</button>
            </div>
            <div className="card-panel">
                <ProfileItem label= "Country" value= { context.user.address.country } />
                <ProfileItem label= "Region" value= { context.user.address.region } />
                <ProfileItem label= "City" value= { context.user.address.city } />
                <ProfileItem label= "Street" value= { context.user.address.street } />
                <ProfileItem label= "Number" value= { context.user.address.number } />
                <ProfileItem label= "Staircase" value= { context.user.address.staircase } />
                <ProfileItem label= "Apartment" value= { context.user.address.apartment } />
                <button>Edit Address</button>
            </div>
            <div className="card-panel">
                <ProfileItem label= "CNP" value= { context.user.ci.cnp } isEditable={ false } />
                <ProfileItem label= "Series" value= { context.user.ci.series } isEditable={ false } />
                <ProfileItem label= "Number" value= { context.user.ci.number } isEditable={ false } />
                <ProfileItem label= "Expires in" value= { context.user.ci.expirationDate } isEditable={ false } />
            </div>
            <div className="card-panel">
                { accounts }
                <button>Add Account</button>
            </div>
        </div>
    );
}