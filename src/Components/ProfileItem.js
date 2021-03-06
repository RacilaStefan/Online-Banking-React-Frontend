import { Logger } from "../Utils/Logger";
import { Button } from "@mui/material";
import { useState } from "react";
import ProfileItemFrom from "./ModalForms/ProfileItemModalForm";

const log = new Logger("Profile Item");

export default function ProfileItem({ label, value, isEditable = true, name }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        log.info("Modal close");
        setOpen(false);
    }

    return (
        <div className="card-panel hoverable row">
            <div className="col s6">
                <p className="profile-item-label">{label}</p>
                <div>
                    {value}
                </div>
            </div>
            { isEditable ? 
            <div className="second">
                <Button variant="outlined" onClick={handleOpen}>Edit</Button>
                <ProfileItemFrom open={open} close={handleClose} value={value} name={name} label={label} />
            </div> : <></> }
        </div>
    );
}