import { Form, Formik } from "formik";
import CustomTextFormFiled from "./CustomTextFormField";
import Button from "@mui/material/Button";
import { VST } from "../Utils/Constants";
import * as Yup from "yup";
import { Logger } from "../Utils/Logger";
import { UpdateField } from "../Utils/UtilFunctions";
import { useContext } from "react";
import Context from "./ContextProvider";

const log = new Logger("Profile Item Form");

function handleSubmit(value, initialValue, context, setContext) {
    if (Object.values(value)[0] === Object.values(initialValue)[0]) return;

    log.trace("Initial value", initialValue);
    log.trace("Submited value", value);
    UpdateField(value, context, setContext);
}

export default function ProfileItemFrom({ value, name }) {
    const { context, setContext} = useContext(Context);
    const initialValue = {[name]: value};
    return (
      <Formik
            initialValues={initialValue}
            validationSchema={Yup.object({[name]: VST.REQUIRED_STRING})}
            onSubmit={(value) => handleSubmit(value, initialValue, context, setContext)}
            >
          <Form>
              <CustomTextFormFiled name={ name }/>
              <Button type="submit" variant="contained">Apply</Button>
          </Form>
      </Formik>
  );
}