import ProfileItem from "./ProfileItem";
import YesNoModal from "./ModalForms/YesNoModal";
import { Button } from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function AccountContainer({ account, showDeleteButton, handleAccountDelete }) {
    const [ visible, setVisible ] = useState(false);
    const [ open, setOpen ] = useState(false);
    return (
        <div className="card-panel">
            <Button onClick={() => setVisible(!visible)}>
                { `Account ${account.id}` }
                {visible ? 
                    <ArrowDropDownIcon />
                    :
                    <ArrowRightIcon />
                }
            </Button>
            {visible ? <>
                <ProfileItem label= "IBAN" value={ account.iban } isEditable={ false }/>
                <ProfileItem label= "Card Number" value={ account.cardNumber } isEditable={ false } />
                <ProfileItem label= "Currency" value={ account.currency } isEditable={ false } />
                <ProfileItem label= "Type" value={ account.type } isEditable={ false } />
                <ProfileItem label= "CVV" value={ account.cvv } isEditable={ false } />
                <ProfileItem label= "Balance" value={ account.balance } isEditable={ false } />
                <ProfileItem label= "Expires in" value={ account.expirationDate } isEditable={ false } />
                {showDeleteButton ? <div>
                    <Button variant="contained" onClick={() => setOpen(true)}>Delete Account</Button>
                    <YesNoModal 
                        handleEvent={() => handleAccountDelete(account.id)} 
                        text={`You want to delete Account ${account.id}?`} 
                        open={open} 
                        close={() => setOpen(false)} />
                </div> : <></>} 
            </> : <></> }
        </div>
    );
}
