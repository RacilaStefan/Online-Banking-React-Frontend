import React from "react";
import { Logger } from "../../Utils/Logger";
import { contextAtom, updateAtom } from "../Context/ContextProvider";
import * as Yup from "yup";
import { TRANSACTION_VALIDATION_SCHEMA, CURRECIES, PAY_URL } from "../../Utils/Constants";
import { useAtom } from "jotai";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import CustomTextFormField from "../FormComponents/CustomTextFormField";
import CustomSelectFormField from "../FormComponents/CustomSelectFormField";
import { useState, useRef } from "react";
import axios from "../../api/axios";

const log = new Logger("Payment Form");

const NUMBER_OF_FORMS = 1;

export default function PaymentForm({open, close: handleClose, account: sourceAccount}) {
    const [context, setContext] = useAtom(contextAtom);
    const [state, setState] = useState(0);
    const formReff = useRef(null);
    const [submitButtonString, setSubmitButtonString] = useState("Next");

    const userAccountsIBAN = [];
    context.user.accounts._accounts.forEach(account => {
        userAccountsIBAN.push({key: `${account.iban} ${account.type} ${account.balance} ${account.currency}`, value:account.iban});
    });

    const initialValues = {
        toIBAN: "",
        fromIBAN: sourceAccount.iban,
        currency: sourceAccount.currency,
        amount: "",
    }

    const handleBackButton = () => {
        let currentForm = state;
        currentForm = currentForm > 0 ? currentForm - 1 : 0;
        let btnString = currentForm === NUMBER_OF_FORMS ? "Sumbit" : "Next";

        setState(currentForm);
        setSubmitButtonString(btnString);
    }

    const handleNextButton = () => {
        let currentForm = state;
        currentForm += 1;
        let btnString = currentForm === NUMBER_OF_FORMS ? "Confirm" : "Next";

        setState(currentForm);
        setSubmitButtonString(btnString);
    }

    const handleSubmit = (values) => {
        if (formReff.current.values.toIBAN === formReff.current.values.fromIBAN) {
            return;
        }
        if (state < NUMBER_OF_FORMS) {
            handleNextButton();
            return;
        }

        axios.post(PAY_URL, 
            {
                toAccountIBAN: values.toIBAN,
                fromAccountIBAN: values.fromIBAN,
                currency: values.currency,
                amount: values.amount,
            }
        ).then((response) => {
            log.info(response.data);
            setContext({ok: Date.now()});
            
        }).catch((error) => {
            log.apiError(error);
        });
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
                    <Formik
                        initialValues={initialValues}
                        innerRef={formReff}
                        validationSchema={Yup.object({...TRANSACTION_VALIDATION_SCHEMA})}
                        onSubmit={handleSubmit}
                        >
                        <Form>
                            { state === 0 ? <>
                                <p> New Payment </p>
                                <CustomSelectFormField name="fromIBAN" options={userAccountsIBAN} text="From Account"/>
                                <CustomTextFormField name="toIBAN" text="To Account"/>
                                <CustomSelectFormField name="currency" options={CURRECIES}/>
                                <CustomTextFormField name="amount" text="Amount"/></>
                            :
                                <><p> Confirm Payment </p>
                                <p> {`You are going to transfer ${formReff.current.values.amount} ${formReff.current.values.currency} to this account`} </p>
                                <p> {`${formReff.current.values.toIBAN}`} </p>
                                <p> from this account </p>
                                <p> {`${formReff.current.values.fromIBAN}`} </p></>
                            }
                            <div className="submit-buttons-container">
                                {state !== 0 ? <Button className="btn waves-effect waves-light first" onClick={handleBackButton}> Back </Button> : <></>}
                                <Button type="submit" className="btn waves-effect waves-light second">{submitButtonString}</Button>
                            </div>
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
