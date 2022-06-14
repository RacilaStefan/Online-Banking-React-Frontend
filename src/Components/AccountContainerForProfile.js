import ProfileItem from "./ProfileItem";
import YesNoModal from "./ModalForms/YesNoModal";
import { Button } from "@mui/material";
import { useState } from "react";

export default function AccountContainer({ account, showDeleteButton, handleAccountDelete }) {
    const [ open, setOpen ] = useState(false);
    return (
        <div className="card-panel">
            <p> { `Account ${account.id}` } </p>
            <ProfileItem label= "IBAN" value={ account.iban } isEditable={ false }/>
            <ProfileItem label= "Card Number" value={ account.cardNumber } isEditable={ false } />
            <ProfileItem label= "Currency" value={ account.currency } isEditable={ false } />
            <ProfileItem label= "Type" value={ account.type } isEditable={ false } />
            <ProfileItem label= "CVV" value={ account.cvv } isEditable={ false } />
            <ProfileItem label= "Balance" value={ account.balance } isEditable={ false } />
            <ProfileItem label= "Expires in" value={ account.expirationDate } isEditable={ false } />
            {showDeleteButton ? <div>
                <Button variant="outlined" onClick={() => setOpen(true)}>Delete Account</Button>
                <YesNoModal 
                    handleEvent={() => handleAccountDelete(account.id)} 
                    text={`You want to delete Account ${account.id}?`} 
                    open={open} 
                    close={() => setOpen(false)} />
            </div> : <></>}
        </div>    
    );
}
