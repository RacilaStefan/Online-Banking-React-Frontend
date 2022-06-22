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

const log = new Logger("Address Modal Form");

const validationSchema = Yup.object({
   country: VALIDATION_SCHEMA.country,
   region: VALIDATION_SCHEMA.region,
   city: VALIDATION_SCHEMA.city,
   street: VALIDATION_SCHEMA.street,
   number: VALIDATION_SCHEMA.number,
   staircase: VALIDATION_SCHEMA.staircase,
   apartment: VALIDATION_SCHEMA.apartment,
})

export default function AddressModalForm({ open, close: handleClose }) {
    const [context, setContext] = useAtom(contextAtom);
    const [showYesNoDialog, setShowYesNoDialog] = useState(false);
    const formReff = useRef(null);
    
    const initialValues = {
        country: context.user.address.country,
        region: context.user.address.region,
        city: context.user.address.city,
        street: context.user.address.street,
        number: context.user.address.number,
        staircase: context.user.address.staircase,
        apartment: context.user.address.apartment,
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
                    <p className="modal-form-title"> Edit Address </p>
                    <Formik
                        initialValues={initialValues}
                        innerRef={formReff}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        >
                        <Form>
                            <CustomTextFormField name="country" text="Country"/>
                            <CustomTextFormField name="region" text="Region"/>
                            <CustomTextFormField name="city" text="City"/>
                            <CustomTextFormField name="street" text="Street"/>
                            <CustomTextFormField name="number" text="Number"/>
                            <CustomTextFormField name="staircase" text="Staircase"/>
                            <CustomTextFormField name="apartment" text="Apartment"/>
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
