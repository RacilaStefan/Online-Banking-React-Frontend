import { Logger } from "../Utils/Logger";
import { Modal, Button } from "@mui/material";
import { useState } from "react";
import ProfileItemFrom from "./ProfileItemFrom";

const log = new Logger("Profile Item");

export default function ProfileItem({ label, value, isEditable = true, getCount, name }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let count;
    if (getCount !== undefined)
        count = getCount();
    //log.trace("getCount", getCount);

    return (
        <div className="card-panel hoverable row">
            <div className="col s6">
                <p>{label}</p>
                <div>
                    {value}
                </div>
            </div>
            { isEditable ? 
            <div className="col s6">
            <Button variant="contained" onClick={handleOpen}>Edit</Button>
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby={ `modal-modal-title${count}` }
                aria-describedby={ `modal-modal-description${count}` }>

                <div className="container modal-form">
                    <p> { label } </p>
                    <ProfileItemFrom id={ `modal-modal-description${count}` } value={ value } name={ name } />
                </div>
            </Modal>
            </div> : <></> }
        </div>
    );
}