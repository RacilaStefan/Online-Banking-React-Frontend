import { Modal, Button } from "@mui/material";
import React, { useState, useRef } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { VALIDATION_SCHEMA } from "../../Utils/Constants";
import { updateFields } from "../../Utils/UtilFunctions";
import CustomTextFormField from "../FormComponents/CustomTextFormField";
import YesNoModal from "./YesNoModal";
import { Logger } from "../../Utils/Logger";
import { useAtom } from "jotai";
import { contextAtom } from "../Context/ContextProvider";

const log = new Logger("User Modal Form");

const validationSchema = Yup.object({
    firstName: VALIDATION_SCHEMA.firstName,
    lastName: VALIDATION_SCHEMA.lastName,
    username: VALIDATION_SCHEMA.username,
    telephoneNumber: VALIDATION_SCHEMA.telephoneNumber,
})

export default function UserModalForm({ open, close: handleClose }) {
    const [ context, setContext ] = useAtom(contextAtom);
    const [ showYesNoDialog, setShowYesNoDialog ] = useState(false);
    const formReff = useRef(null);
    const initialValues = {
        firstName: context.user.firstName,
        lastName: context.user.lastName,
        username: context.user.username,
        telephoneNumber: context.user.telephoneNumber,
    };

    const closeDialog = () => {
        setShowYesNoDialog(false);
    }

    const handleApply = () => {
        let hasDiffValues = false;
        for (let i = 0; i < Object.values(formReff.current.values).length; i++) {
            if (Object.values(formReff.current.values)[i] !== Object.values(initialValues)[i]) {
                hasDiffValues = true;
                break;
            }
        }
        if (!hasDiffValues) return false;
        if (showYesNoDialog === false) {
            setShowYesNoDialog(true);
            return false;
        }

        return true;
    }

    const handleSubmit = (value) => {
        if (!handleApply()) return;

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
                    <p className="modal-form-title"> Edit User </p>
                    <Formik
                        initialValues={initialValues}
                        innerRef={formReff}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        >
                        <Form>
                            <CustomTextFormField name="firstName" text="First Name"/>
                            <CustomTextFormField name="lastName" text="Last Name"/>
                            <CustomTextFormField name="username" text="Username"/>
                            <CustomTextFormField name="telephoneNumber" text="TelephoneNumber"/>
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
