import { Form, Formik } from "formik";
import CustomTextFormField from "../FormComponents/CustomTextFormField";
import Button from "@mui/material/Button";
import { VST } from "../../Utils/Constants";
import * as Yup from "yup";
import { Logger } from "../../Utils/Logger";
import { updateFields } from "../../Utils/UtilFunctions";
import React, { useRef, useState } from "react";
import YesNoModal from "./YesNoModal";
import { Modal } from "@mui/material";
import { useAtom } from "jotai";
import { contextAtom } from "../Context/ContextProvider";

const log = new Logger("Profile Item Form");

export default function ProfileItemFrom({ value, name, label, open, close: handleClose }) {
    const [ context, setContext ] = useAtom(contextAtom);
    const [ showYesNoDialog, setShowYesNoDialog ] = useState(false);
    const formReff = useRef(null);
    const initialValue = {[name]: value};

    const closeDialog = () => {
        setShowYesNoDialog(false);
    }

    const handleApply = () => {
        if (Object.values(formReff.current.values)[0] === Object.values(initialValue)[0]) return false;
        if (showYesNoDialog === false) {
            setShowYesNoDialog(true);
            return false;
        }

        return true;
    }

    const handleSubmit = (value) => {
        const result = handleApply();
        if (!result) return;

        setShowYesNoDialog(false);
        updateFields(value, context, setContext);
        handleClose();
    }

    return (
        <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">

            <div className="container modal-form">
                <div id="modal-modal-description">
                    <p className="modal-form-smaller-title"> { label } </p>
                    <Formik
                        initialValues={initialValue}
                        innerRef={formReff}
                        validationSchema={Yup.object({[name]: VST.REQUIRED_STRING})}
                        onSubmit={handleSubmit}
                        >
                        <Form>
                            <CustomTextFormField name={ name }/>
                            <Button onClick={handleApply} variant="contained">Apply</Button>
                            {showYesNoDialog ? 
                                <YesNoModal formReff={formReff.current} open={showYesNoDialog} close={closeDialog}/> : <></>}
                        </Form>
                    </Formik>
                </div>
        
                <Button className="close-btn" onClick={handleClose}>
                    <i className="material-icons">
                        close
                    </i>
                </Button>
            </div>
        </Modal>
  );
}