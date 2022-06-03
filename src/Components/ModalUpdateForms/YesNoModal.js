import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

export default function YesNoModal({ text = "Are you sure?", formReff, open, close, handleEvent }) {
    const handleClose = (value) => {
        
        if (value) {
            if (formReff !== undefined) {
                formReff.submitForm();
            } else {
                handleEvent();
                close();
            }
        } else {
            close();
        }
    }

    return (
        <Modal
            hideBackdrop
            open={open}
            onClose={() => handleClose(false)}
            aria-labelledby={ "modal-modal-title" }
            aria-describedby={ "modal-modal-description" }>
            <div className="container modal-form">
                <h4 className="modal-modal-title center">{text}</h4>
                <div className="modal-modal-description center">
                    <Button variant="outlined" onClick={() => handleClose(true)}>
                        Yes
                    </Button>
                    <Button variant="outlined" onClick={() => handleClose(false)}>
                        No
                    </Button>
                </div>
            </div>
        </Modal>
    );
}