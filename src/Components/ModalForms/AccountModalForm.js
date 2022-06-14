import { Modal, Button } from "@mui/material";
import React, { useState, useRef } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { VALIDATION_SCHEMA, CURRECIES, ACCOUNT_TYPES } from "../../Utils/Constants";
import { createBankAccount } from "../../Utils/UtilFunctions";
import CustomSelectFormField from "../FormComponents/CustomSelectFormField";
import YesNoModal from "./YesNoModal";
import { Logger } from "../../Utils/Logger";
import { useAtom } from "jotai";
import { contextAtom } from "../Context/ContextProvider";

const log = new Logger("Address Modal Form");

const validationSchema = Yup.object({
   currency: VALIDATION_SCHEMA.currency,
   type: VALIDATION_SCHEMA.type,
});

const initialValues = {
    currency: 'RON',
    type: 'CURRENT_ACCOUNT',
};

export default function AccountModalForm({ open, close: handleClose }) {
    const [ context, setContext ] = useAtom(contextAtom);
    const [ showYesNoDialog, setShowYesNoDialog ] = useState(false);
    const formReff = useRef(null);

    const closeDialog = () => {
        setShowYesNoDialog(false);
    }

    const handleApply = () => {
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
        createBankAccount(value, context, setContext);
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
                    <p> Add account </p>
                    <Formik
                        initialValues={initialValues}
                        innerRef={formReff}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        >
                        <Form>
                            <CustomSelectFormField name = "currency" options={CURRECIES}/>
                            <CustomSelectFormField name = "type" options={ACCOUNT_TYPES}/>
                            <Button onClick={handleApply} variant="contained">Add</Button>
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
